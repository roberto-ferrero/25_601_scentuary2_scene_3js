//import gsap from "gsap"
import * as THREE from 'three'

import { Water } from 'three/examples/jsm/objects/Water2.js'

class Pools{
    constructor (obj){
        console.log("(Pools.CONSTRUCTORA): ", obj)
        this.app = obj.app
        this.project = obj.project
        this.stage = obj.stage
        this.scenario = obj.scenario
        this.sunPosition = obj.sunPosition
        this.sunColor = obj.sunColor
        this.parent3D = obj.parent3D
        //-----------------------------

       
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
            color: 0xffefd8,
            distortionScale: 1.5,
            fog: this.app.scene.fog !== undefined
        })
        this.pool1_mesh.rotation.x = -Math.PI / 2
        this.pool1_mesh.rotation.z = Math.PI
        this.pool1_mesh.position.set(-5, -0.20, -2.7)
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
            color: 0xffefd8, //0xffe3b9,
            distortionScale: 1.5,
            fog: this.app.scene.fog !== undefined
        })
        this.pool2_mesh.rotation.x = -Math.PI / 2
        this.pool2_mesh.rotation.z = Math.PI
        this.pool2_mesh.position.set(-5, -0.20, 2.7)
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