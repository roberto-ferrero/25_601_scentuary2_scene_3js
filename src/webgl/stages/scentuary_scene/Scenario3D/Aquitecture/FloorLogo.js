//import gsap from "gsap"
import * as THREE from 'three'

class FloorLogo{
    constructor (obj){
        console.log("(FloorLogo.CONSTRUCTORA): ", obj)
        this.app = obj.app
        this.project = obj.project
        this.stage = obj.stage
        this.scenario = obj.scenario
        this.parent3D = obj.parent3D
        //-----------------------------
        this._build_item("logo")
    }
    //----------------------------------------------
    // PUBLIC:
    
    //----------------------------------------------
    // EVENTS:

    //----------------------------------------------
    // PRIVATE:
    _build_item(itemId){
        const mesh = this.stage.get_mesh_from_GLB_PROJECT(itemId)
        const texture = this.stage.loader.get_texture(itemId)
        texture.flipY = false;
        
        const material = new THREE.MeshStandardMaterial({
            map: texture, // Use the loaded texture
            color: new THREE.Color(0x000000),
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
            opacity: 3.0,
            side: THREE.DoubleSide
          });
        mesh.material = material
        mesh.receiveShadow = true;
        this.parent3D.add(mesh)
    }
    
    //----------------------------------------------
    // AUX:

  
}
export default FloorLogo