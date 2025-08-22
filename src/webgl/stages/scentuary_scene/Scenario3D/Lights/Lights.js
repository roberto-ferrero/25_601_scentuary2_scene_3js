//import gsap from "gsap"
import * as THREE from 'three'

import PointLight3D from './PointLight3D' 
import AreaLight3D from './AreaLight3D'
import SunLight from './SunLight'
// import { distance } from 'three/src/nodes/TSL.js'

class Lights{
    constructor (obj){
        console.log("(Lights.CONSTRUCTORA): ", obj)
        this.app = obj.app
        this.project = obj.project
        this.stage = obj.stage
        this.scenario = obj.scenario
        this.parent3D = obj.parent3D
        //-----------------------------
        const intensity_mod = 0
        this.PRESETS = {
            cenitalA: {
                color: 0xFDC274,
                intensity: 90*intensity_mod,
                distance: 100,
                decay: 2
            },
            fillA1: {
                color: 0xFDC274,
                intensity: 80*intensity_mod,
                distance: 100,
                decay: 2
            },
            fillA2: {
                color: 0xFDC274,
                intensity: 29*intensity_mod,
                distance: 100,
                decay: 2
            },
            cenitalB: {
                color: 0xFDC274,
                intensity: 90*intensity_mod,
                distance: 100,
                decay: 2
            },
            fillB1: {
                color: 0xFDC274,
                intensity: 80*intensity_mod,
                distance: 100,
                decay: 2
            },
        }
        this.LIGHTS = []
        //-----------------------------
        // SUN:
        this.sun = new SunLight({
            app:this.app,
            project:this.project,
            stage:this.stage,
            parent3D:this.parent3D,
            mesh:this.stage.get_mesh_from_GLB_PROJECT("sun")
        })
        //-----------------------------
        // AMBIENT:
        const dev_ambientLight = new THREE.AmbientLight(0xe5a860, 2.2); // Soft white light
        this.parent3D.add(dev_ambientLight);
        //-----------------------------
        this.stage.GLB_PROJECT.children.map((child)=>{
            // console.log("child.name: ", child.name, child);
            if(child.name.includes("_pointlight")){
                const objectId = child.name
                const lightId = child.name.split("_")[0]
                const light = new PointLight3D({
                    app:this.app,
                    project:this.project,
                    stage:this.stage,
                    scenario:this.scenario,
                    parent3D:this.parent3D,
                    itemId: objectId,
                    // importedObj: child,
                    // pointLight: new THREE.PointLight(0xffffff, 40, 100, 2) // color, intensity, distance, decay
                    pointLight: new THREE.PointLight(this.PRESETS[lightId].color, this.PRESETS[lightId].intensity, this.PRESETS[lightId].distance, this.PRESETS[lightId].decay) // color, intensity, distance, decay
                })
                this.LIGHTS.push(light)
            }else if(child.name.includes("_arealight")){
                const objectId = child.name
                const lightId = child.name.split("_")[0]
                const light = new AreaLight3D({
                    app:this.app,
                    project:this.project,
                    stage:this.stage,
                    scenario:this.scenario,
                    parent3D:this.parent3D,
                    itemId: objectId,
                    lightData: this.PRESETS[lightId]
                })
                this.LIGHTS.push(light)
            }
        })
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
export default Lights