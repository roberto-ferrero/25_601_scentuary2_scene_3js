//import gsap from "gsap"
import * as THREE from 'three'

class Seal{
    constructor (obj){
        console.log("(Seal.CONSTRUCTORA): ", obj)
        this.app = obj.app
        this.project = obj.project
        this.stage = obj.stage
        this.scenario = obj.scenario
        this.parent3D = obj.parent3D
        this.index = Number(obj.index)
        //-----------------------------
        this.sealId = "seal"+this.index
        this.textId = "text"+this.index
        //-----------------------------
        this.yOffset = 0.3
        switch (this.index) {
            case 1:
                this.yOffset = 0.3;
                break;
            case 2:
                this.yOffset = 0.27;
                break;
            case 3:
                this.yOffset = 0.4;
                break;
            case 4:
                this.yOffset = 0.4;
                break;
            case 5:
                this.yOffset = 0.32;
                break;
            case 6:
                this.yOffset = 0.4;
                break;
            case 7:
                this.yOffset = 0.78;
                break;
            case 8:
                this.yOffset = 0.5;
                break;
            default:
                this.yOffset = 0.3;
                break;
        }
        //-----------------------------
        this._build_item("logo")
    }
    //----------------------------------------------
    // PUBLIC:
    
    //----------------------------------------------
    // EVENTS:

    //----------------------------------------------
    // PRIVATE:
    _build_item(){
        console.log("sealId: ", this.sealId);
        const spot = this.stage.spots.get_spot(this.sealId)

        const sealGeometry = new THREE.PlaneGeometry(1, 1.294);
        const sealTexture = this.stage.loader.get_texture(this.sealId)
        const sealMaterial = new THREE.MeshStandardMaterial({
            map: sealTexture, // Use the loaded texture
            color: new THREE.Color(0xa33608),
            // blending: THREE.MultiplyBlending,
            // aoMap: texture_ao,
            // aoMapIntensity: 1.0,
            // lightMap: texture_bump,
            // lightMapIntensity: 2,
            // color: this.scenario.BESE_MARBEL_COLOR, // Ivory base color
            roughness: 0.0,   // Moderate roughness for a soft shine
            metalness: 0.0,   // Non-metallic
            
            // bumpMap: texture_bump,
            // bumpScale: 1, // Adjust the bump scale as needed
            // lightMap: this.texture_bump,
            // lightMapIntensity: 0.5,
            transparent: true,
            opacity: 1.0,
            emissive: new THREE.Color(0xa33608),
            emissiveIntensity: 1.0,
            side: THREE.DoubleSide
          });

        const sealMesh = new THREE.Mesh(sealGeometry, sealMaterial);
        sealMesh.position.copy(spot)
        sealMesh.rotation.set(0, 0, 0)
        sealMesh.rotation.y = -Math.PI/2
        sealMesh.position.x -= 0.01
        sealMesh.scale.set(0.21,0.21,0.21)
        sealMesh.receiveShadow = true;
        this.parent3D.add(sealMesh)

        const textGeometry = new THREE.PlaneGeometry(1, 0.176);
        const textTexture = this.stage.loader.get_texture(this.textId)
        const textMaterial = new THREE.MeshStandardMaterial({
            map: textTexture, // Use the loaded texture
            color: new THREE.Color(0xa33608),
            // blending: THREE.MultiplyBlending,
            // aoMap: texture_ao,
            // aoMapIntensity: 1.0,
            // lightMap: texture_bump,
            // lightMapIntensity: 2,
            // color: this.scenario.BESE_MARBEL_COLOR, // Ivory base color
            roughness: 0.0,   // Moderate roughness for a soft shine
            metalness: 0.0,   // Non-metallic
            
            // bumpMap: texture_bump,
            // bumpScale: 1, // Adjust the bump scale as needed
            // lightMap: this.texture_bump,
            // lightMapIntensity: 0.5,
            transparent: true,
            opacity: 1.0,
            emissive: new THREE.Color(0xa33608),
            emissiveIntensity: 1.0,
            side: THREE.DoubleSide
          });

        const textMesh = new THREE.Mesh(textGeometry, textMaterial);
        textMesh.position.copy(spot)
        textMesh.rotation.set(0, 0, 0)
        textMesh.rotation.y = -Math.PI/2
        textMesh.position.x -= 0.01
        textMesh.position.y -= this.yOffset
        textMesh.scale.set(0.33,0.33,0.33)
        textMesh.receiveShadow = true;
        this.parent3D.add(textMesh)



    }
    
    //----------------------------------------------
    // AUX:

  
}
export default Seal