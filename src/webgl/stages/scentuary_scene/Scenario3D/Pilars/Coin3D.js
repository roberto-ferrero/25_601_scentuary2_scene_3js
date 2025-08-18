//import gsap from "gsap"
import * as THREE from 'three'

class Coin3D{
    constructor (obj){
        // console.log("(Coin3D.CONSTRUCTORA): ", obj)
        this.app = obj.app
        this.project = obj.project
        this.stage = obj.stage
        this.scenario = obj.scenario
        this.parent3D = obj.parent3D
        this.pilar = obj.pilar
        this.meshId = obj.meshId
        this.spotId = obj.spotId
        //-----------------------------
        this.SCENT_ID = obj.SCENT_ID
        //-----------------------------
        this.mesh = this.stage.get_mesh_from_GLB_PROJECT(this.meshId)
        //--
        // this.texture = this.stage.loader.get_texture(this.itemId)
        // this.texture.flipY = false;
        //--
        // this.texture_ao = this.stage.loader.get_texture(this.itemId+"_ao")
        // this.texture_ao.flipY = false;
        //--
        const goldMaterial = new THREE.MeshStandardMaterial({
            // map: this.texture2, // Use the loaded texture
            // color: new THREE.Color(0xedc22d), // Rich gold color (hex for gold)
            color: new THREE.Color(0xaf8140), // Rich gold color (hex for gold)
            metalness: 1.0,               // Fully metallic
            roughness: 0.2,               // A bit of roughness for realism
            emissive: new THREE.Color(0xaf8140), // Rich gold color (hex for gold)
            emissiveIntensity: 0.1,       // Soft glow
            envMap: this.stage.envmap,
            envMapInearensity: 0.2,          // Intensity of the environment map reflection
            // color: new THREE.Color(0xFFD700) // Rich gold color (hex for gold)
        });
        
        // const goldMaterial = new THREE.MeshPhysicalMaterial({
        //             map: this.texture2, // Use the loaded texture
        //             color: new THREE.Color(0xfee29e), // gold base color
        //             metalness: 0.9,
        //             roughness: 0.1, // slight roughness for realism
        //             clearcoat: 1.0, // gives it an extra glossy finish
        //             clearcoatRoughness: 0.05,
        //             reflectivity: 0.9, // high reflectivity
        //             // sheen: 1.0,
        //             // sheenColor: new THREE.Color(0xfee29e), // subtle warm sheen
        //                 emissive: new THREE.Color(0xffe490), // Rich gold color (hex for gold)
        //                 emissiveIntensity: 0.6, // Soft glow
        //             iridescence: 1.0, // subtle iridescence effect
        //             iridescenceIOR: 1.0, // index of refraction for irides
    
        //         });

        this.mesh.material = goldMaterial
        this.mesh.castShadow = true;
        this.mesh.position.copy(this.stage.spots.get_spot(this.spotId));
        this.mesh.position.y += 0.15; // Slightly above the spot to avoid z-fighting
        // console.log("mesh"s,this.mesh);
        this.parent3D.add(this.mesh)
        //-----------------------------

    }
    //----------------------------------------------
    // PUBLIC:
    
    //----------------------------------------------
    // EVENTS:

    //----------------------------------------------
    // PRIVATE:

    //----------------------------------------------
    // AUX:

  
}
export default Coin3D