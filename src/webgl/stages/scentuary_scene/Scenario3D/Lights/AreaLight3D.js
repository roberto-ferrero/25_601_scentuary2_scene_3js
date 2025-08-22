//import gsap from "gsap"
import * as THREE from 'three'

import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib.js';
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper.js';

class AreaLight3D{
    constructor (obj){
        console.log("(AreaLight3D.CONSTRUCTORA): ", obj)
        this.app = obj.app
        this.project = obj.project
        this.stage = obj.stage
        this.parent3D = obj.parent3D
        this.itemId = obj.itemId
        this.lightData = obj.lightData
        //-----------------------------
        RectAreaLightUniformsLib.init();
        this.areaLight = new THREE.RectAreaLight(this.lightData.color, this.lightData.intensity, 1, 1) // color, intensity, distance, decay
        //-----------------------------
        this.mesh = this.stage.get_mesh_from_GLB_PROJECT(this.itemId)
        // console.log("this.mesh",this.mesh);
        //-----------------------------
        // this.areaLight = new THREE.areaLight(0xffffff, 50, 100); // color, intensity, distance
        this.areaLight.position.copy(this.mesh.position);
        this.areaLight.rotation.copy(this.mesh.rotation);
        this.parent3D.add(this.areaLight);;
        
        this.parent3D.add(this.areaLight)
        //-----------------------------
        this.areaLight_helper = new RectAreaLightHelper(this.areaLight, this.lightData.color); // size of the helper
        this.app.register_helper(this.areaLight_helper);
        this.parent3D.add(this.areaLight_helper);
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
export default AreaLight3D