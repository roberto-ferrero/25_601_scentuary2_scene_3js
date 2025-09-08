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
       const seaGeometry = new THREE.PlaneGeometry(5, 6, 1, 1) // Replace size if needed
       
        const waterNormals = this.stage.loader.get_texture("waternormals");
        waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;

        const normalMap0 = this.stage.loader.get_texture("normalMap0");
        normalMap0.wrapS = normalMap0.wrapT = THREE.RepeatWrapping;

        const normalMap1 = this.stage.loader.get_texture("normalMap1");
        normalMap1.wrapS = normalMap1.wrapT = THREE.RepeatWrapping;

        this.pool1_mesh = new Water(seaGeometry, {
            // color: 0x001e0f,
            scale: 0.5,
            // flowDirection: new THREE.Vector2(1, 1),
            // textureWidth: 1024,
            // textureHeight: 1024
            textureWidth: 128,
            textureHeight: 128,
            flowDirection: new THREE.Vector2(0.2, 0.0),
            waterNormals: waterNormals,
            normalMap0: normalMap0,
            normalMap1: normalMap1,
            sunDirection: this.sunPosition,
            sunColor: 0xffffff, //this.sunColor,
            color: 0xe4d3c3,
            distortionScale: 3,
            fog: this.app.scene.fog !== undefined
        })
        this.pool1_mesh.rotation.x = -Math.PI / 2
        this.pool1_mesh.rotation.z = Math.PI
        this.pool1_mesh.position.set(-0.7-4, -0.07, 0)
        // this.mesh.rotation.z = -Math.PI / 2
        this.parent3D.add(this.pool1_mesh)
        //--
        // this.pool2_mesh = new Water(seaGeometry, {
        //     // color: 0x001e0f,
        //     scale: 0.5,
        //     // flowDirection: new THREE.Vector2(1, 1),
        //     // textureWidth: 1024,
        //     // textureHeight: 1024
        //     textureWidth: 128,
        //     textureHeight: 128,
        //     flowDirection: new THREE.Vector2(-0.2, 0),
        //     waterNormals: waterNormals,
        //     normalMap0: normalMap0,
        //     normalMap1: normalMap1,
        //     sunDirection: this.sunPosition,
        //     sunColor: 0xffffff, //this.sunColor,
        //     // color: 0xffefd8, //0xffe3b9,
        //     color: 0xe4d3c3, //0xffe3b9,
        //     distortionScale: 3,
        //     fog: this.app.scene.fog !== undefined
        // })
        // this.pool2_mesh.rotation.x = -Math.PI / 2
        // this.pool2_mesh.rotation.z = Math.PI
        // this.pool2_mesh.position.set(-0.7-4, -0.05, 4.5)
        // // this.mesh.rotation.z = -Math.PI / 2
        // this.parent3D.add(this.pool2_mesh)


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