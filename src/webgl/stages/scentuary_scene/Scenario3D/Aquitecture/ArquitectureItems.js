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
        this._build_item("archwall")
        this._build_item("walls")
        this._build_item("floor")
        this._build_item("benchTop")
        this._build_item("benchBase")
        this._build_item("pools")

        // this.mesh1 = this.stage.get_mesh_from_GLB_PROJECT("floor")
        // this.texture1 = this.stage.loader.get_texture("floor")
        // this.texture1.flipY = false;
        // this.texture1_ao = this.stage.loader.get_texture("floor_ao")
        // this.texture1_ao.flipY = false;
        // this.texture_bump = this.stage.loader.get_texture("floor_bump")
        // this.texture_bump.flipY = false;
        // // this.texture_light = this.stage.loader.get_texture("floor_shadow")
        // // this.texture_light.flipY = false;
        // const marbleMaterial = new THREE.MeshStandardMaterial({
        //     map: this.texture1, // Use the loaded texture
        //     aoMap: this.texture1_ao,
        //     aoMapIntensity: 1.0,
        //     // lightMap: this.texture_light,
        //     // lightMapIntensity: 0.5,
        //     color: this.scenario.BESE_MARBEL_COLOR, // Ivory base color
        //     roughness: 0.45,   // Moderate roughness for a soft shine
        //     metalness: 0.0,   // Non-metallic
            
        //     bumpMap: this.texture_bump,
        //     bumpScale: 3, // Adjust the bump scale as needed
        //     // lightMap: this.texture_bump,
        //     // lightMapIntensity: 0.5,
            
            
        //   });
        // this.mesh1.material = marbleMaterial
        // this.mesh1.receiveShadow = true;
        // // console.log("mesh",this.mesh1);
        // this.parent3D.add(this.mesh1)



        //-----------------------------
        // this.mesh2 = this.stage.get_mesh_from_GLB_PROJECT("pools")
        // this.texture2 = this.stage.loader.get_texture("pools")
        // this.texture2.flipY = false;
        // this.texture2_ao = this.stage.loader.get_texture("pools_ao")
        // this.texture2_ao.flipY = false;
        // // this.texture_bump = this.stage.loader.get_texture("floor_bump")
        // // this.texture_bump.flipY = false;
        // // this.texture_light = this.stage.loader.get_texture("floor_shadow")
        // // this.texture_light.flipY = false;
        // const marbleMaterial2 = new THREE.MeshStandardMaterial({
        //     map: this.texture2, // Use the loaded texture
        //     aoMap: this.texture2_ao,
        //     aoMapIntensity: 1.0,
        //     // lightMap: this.texture_light,
        //     // lightMapIntensity: 0.5,
        //     color: this.scenario.BESE_MARBEL_COLOR, // Ivory base color
        //     roughness: 0.45,   // Moderate roughness for a soft shine
        //     metalness: 0.0,   // Non-metallic
        //     bumpMap: this.texture_bump,
        //     bumpScale: 3, // Adjust the bump scale as needed
        //     // lightMap: this.texture_bump,
        //     // lightMapIntensity: 0.5,
            
            
        //   });
        // this.mesh2.material = marbleMaterial2
        // this.mesh2.receiveShadow = true;
        // // console.log("mesh",this.mesh1);
        // this.parent3D.add(this.mesh2)


         //-----------------------------
        // this.arc_mesh = this.stage.get_mesh_from_GLB_PROJECT("arc")
        // this.arc_texture = this.stage.loader.get_texture("arc")
        // this.arc_texture.flipY = false;
        // this.arc_texture_ao = this.stage.loader.get_texture("arc_ao")
        // this.arc_texture_ao.flipY = false;
        // this.arc_texture_bump = this.stage.loader.get_texture("floor_bump")
        // this.arc_texture_bump.flipY = false;
        // // this.texture_light = this.stage.loader.get_texture("floor_shadow")
        // // this.texture_light.flipY = false;
        // const arc_marbleMaterial = new THREE.MeshStandardMaterial({
        //     map: this.arc_texture, // Use the loaded texture
        //     aoMap: this.arc_texture_ao,
        //     aoMapIntensity: 1.0,
        //     // lightMap: this.texture_light,
        //     // lightMapIntensity: 0.5,
        //     color: this.scenario.BESE_MARBEL_COLOR, // Ivory base color
        //     roughness: 0.45,   // Moderate roughness for a soft shine
        //     metalness: 0.0,   // Non-metallic
        //     bumpMap: this.arc_texture_bump,
        //     bumpScale: 3, // Adjust the bump scale as needed
        //     // lightMap: this.texture_bump,
        //     // lightMapIntensity: 0.5,
            
            
        // });
        // this.arc_mesh.material = arc_marbleMaterial
        // this.arc_mesh.receiveShadow = true;
        // // console.log("mesh",this.mesh1);
        // this.parent3D.add(this.arc_mesh)

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
            aoMapIntensity: 0.5,
            lightMap: texture_bump,
            lightMapIntensity: 2.5,
            // color: this.scenario.BESE_MARBEL_COLOR, // Ivory base color
            roughness: 0.45,   // Moderate roughness for a soft shine
            metalness: 0.0,   // Non-metallic
            
            bumpMap: texture_bump,
            bumpScale: -5, // Adjust the bump scale as needed
            // lightMap: this.texture_bump,
            // lightMapIntensity: 0.5,
            side: THREE.DoubleSide
          });
        mesh.material = marbleMaterial
        mesh.receiveShadow = true;
        this.parent3D.add(mesh)
    }
    //----------------------------------------------
    // AUX:

  
}
export default ArquitectureItems