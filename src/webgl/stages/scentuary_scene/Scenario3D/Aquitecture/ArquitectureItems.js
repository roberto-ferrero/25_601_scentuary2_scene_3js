//import gsap from "gsap"
import * as THREE from 'three'

class ArquitectureItems{
    constructor (obj){
        // console.log("(ArquitectureItems.CONSTRUCTORA): ", obj)
        this.app = obj.app
        this.project = obj.project
        this.stage = obj.stage
        this.scenario = obj.scenario
        this.parent3D = obj.parent3D
        //-----------------------------
        this._build_item("walls")
        this._build_item("floor")
        this._build_item("archwall")

        this._build_item("benchTop")
        this._build_item("benchBase")
        this._build_item("pools")
        this._build_gold_item("archinside")
        
    

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
        const texture_ao = this.stage.loader.get_texture(itemId+"_ao")
        texture_ao.flipY = false;
        const texture_bump = this.stage.loader.get_texture(itemId+"_bump")
        texture_bump.flipY = false;
        const marbleMaterial = new THREE.MeshStandardMaterial({
            map: texture, // Use the loaded texture
            aoMap: texture_ao,
            aoMapIntensity: 1.0,
            lightMap: texture_bump,
            lightMapIntensity: 0.3,            // color: this.scenario.BESE_MARBEL_COLOR, // Ivory base color
            roughness: 0.5,   // Moderate roughness for a soft shine
            metalness: 0.0,   // Non-metallic
            
            bumpMap: texture_bump,
            bumpScale: -3, // Adjust the bump scale as needed

            emissiveMap:texture_bump,
            emissive: new THREE.Color(0xd5b99f),
            emissiveIntensity: 0.2,

            // side: THREE.DoubleSide
          });
        mesh.material = marbleMaterial
        mesh.receiveShadow = true;
        this.parent3D.add(mesh)
    }
    _build_gold_item(itemId){
        const mesh = this.stage.get_mesh_from_GLB_PROJECT(itemId)
        const texture = this.stage.loader.get_texture(itemId)
        texture.flipY = false;
        const texture_ao = this.stage.loader.get_texture(itemId+"_ao")
        texture_ao.flipY = false;
        // const texture_bump = this.stage.loader.get_texture(itemId+"_bump")
        // texture_bump.flipY = false;
        // const marbleMaterial = new THREE.MeshStandardMaterial({
        const marbleMaterial = new THREE.MeshPhongMaterial({
            map: texture, // Use the loaded texture
            aoMap: texture_ao,
            aoMapIntensity: 1.0,
            // lightMap: texture_bump,
            // lightMapIntensity: 2.5,
            // color: new THREE.Color(0xe9c73f), // Ivory base color
            roughness: 0.2,   // Moderate roughness for a soft shine
            metalness: 0.9,   // Non-metallic
            
            // bumpMap: texture_bump,
            // bumpScale: 5, // Adjust the bump scale as needed
            // lightMap: this.texture_bump,
            // lightMapIntensity: 0.5,
            emissive: new THREE.Color(0xe9c73f), // Ivory base color
            emissiveIntensity: 0.1,
            // side: THREE.DoubleSide

          });
        mesh.material = marbleMaterial
        mesh.receiveShadow = true;
        this.parent3D.add(mesh)
    }
    //----------------------------------------------
    // AUX:

  
}
export default ArquitectureItems