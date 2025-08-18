//import gsap from "gsap"
import * as THREE from 'three'

import { Water } from 'three/examples/jsm/objects/Water2.js'

class Pools{
    constructor (obj){
        // console.log("(Pools.CONSTRUCTORA): ", obj)
        this.app = obj.app
        this.project = obj.project
        this.stage = obj.stage
        this.scenario = obj.scenario
        this.sunPosition = obj.sunPosition
        this.sunColor = obj.sunColor
        this.parent3D = obj.parent3D
        //-----------------------------

        //-----------------------------
        this.itemId = "poolwalls"
        this.mesh = this.stage.get_mesh_from_GLB_PROJECT(this.itemId)
        this.texture = this.stage.loader.get_texture("poolwalls")
        this.texture.flipY = false;
        //--
        this.texture_ao = this.stage.loader.get_texture("poolwalls_ao")
        this.texture_ao.flipY = false;
        this.texture_bump = this.stage.loader.get_texture("poolwalls_bump")
        this.texture_bump.flipY = false;
        //--
        const marbleMaterial = new THREE.MeshStandardMaterial({
            map: this.texture, // Use the loaded texture
            color: this.scenario.BESE_MARBEL_COLOR, // Ivory base color
            // color: 0xff0000, // Ivory base color
            aoMap: this.texture_ao,
            aoMapIntensity: 1,
            roughness: 0.4,   // Moderate roughness for a soft shine
            metalness: 0.0,   // Non-metallic
            bumpMap: this.texture_bump,
            bumpScale: 3, // Adjust the bump scale as needed
            lightMap: this.texture_bump,
            lightMapIntensity: 0.5,
        });
        this.mesh.material = marbleMaterial
        this.mesh.castShadow = true;
        this.mesh.receiveShadow = true;
        // console.log("mesh",this.mesh);
        this.parent3D.add(this.mesh)
        //-----------------------------

        const params = {
            color: '#ffffff',
            scale: 4,
            flowX: 1,
            flowY: 1
        };
        //-----------------------------
        // this.mesh = this.stage.get_mesh_from_GLB_PROJECT(this.itemId)

        //---
        //const seaGeometry = new THREE.PlaneGeometry(100, 400, 10, 100) // Replace size if needed
       const seaGeometry = new THREE.PlaneGeometry(5, 5, 10, 10) // Replace size if needed
       
        const waterNormals = this.stage.loader.get_texture("waternormals");
        waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;

        const normalMap0 = this.stage.loader.get_texture("normalMap0");
        normalMap0.wrapS = normalMap0.wrapT = THREE.RepeatWrapping;

        const normalMap1 = this.stage.loader.get_texture("normalMap1");
        normalMap1.wrapS = normalMap1.wrapT = THREE.RepeatWrapping;

        this.pool1_mesh = new Water(seaGeometry, {
            // color: 0x001e0f,
            // scale: 4,
            // flowDirection: new THREE.Vector2(1, 1),
            // textureWidth: 1024,
            // textureHeight: 1024
            textureWidth: 512,
            textureHeight: 512,
            flowDirection: new THREE.Vector2(1, 0.2),
            waterNormals: waterNormals,
            normalMap0: normalMap0,
            normalMap1: normalMap1,
            sunDirection: this.sunPosition,
            sunColor: 0xffffff, //this.sunColor,
            color: 0xffe3b9,
            distortionScale: 1.5,
            fog: this.app.scene.fog !== undefined
        })
        this.pool1_mesh.rotation.x = -Math.PI / 2
        this.pool1_mesh.rotation.z = Math.PI
        this.pool1_mesh.position.set(-6, 0.25, -4.54)
        // this.mesh.rotation.z = -Math.PI / 2
        this.parent3D.add(this.pool1_mesh)
        //--
        this.pool2_mesh = new Water(seaGeometry, {
            // color: 0x001e0f,
            // scale: 4,
            // flowDirection: new THREE.Vector2(1, 1),
            // textureWidth: 1024,
            // textureHeight: 1024
            textureWidth: 512,
            textureHeight: 512,
            flowDirection: new THREE.Vector2(1, 0.2),
            waterNormals: waterNormals,
            normalMap0: normalMap0,
            normalMap1: normalMap1,
            sunDirection: this.sunPosition,
            sunColor: 0xffffff, //this.sunColor,
            color: 0xffe3b9,
            distortionScale: 1.5,
            fog: this.app.scene.fog !== undefined
        })
        this.pool2_mesh.rotation.x = -Math.PI / 2
        this.pool2_mesh.rotation.z = Math.PI
        this.pool2_mesh.position.set(-6, 0.25, 4.7)
        // this.mesh.rotation.z = -Math.PI / 2
        this.parent3D.add(this.pool2_mesh)


    }
    //----------------------------------------------
    // PUBLIC:
    update_RAF (){
        
    }
    //----------------------------------------------
    // EVENTS:

    //----------------------------------------------
    // PRIVATE:

    //----------------------------------------------
    // AUX:

  
}
export default Pools