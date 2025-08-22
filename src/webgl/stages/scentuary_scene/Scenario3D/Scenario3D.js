//import gsap from "gsap"
import * as THREE from 'three'

// import Sun from "./Lights/SunLight"
import PilarsGroup from "./Pilars/PilarsGroup"
import Walls3D from './Walls/Walls3D'
import ArquitectureItems from './Aquitecture/ArquitectureItems'
import Stairs3D from './Stairs/Stairs3D'
import Sea3D from './Sea/Sea3D'
// import PointLight3D from './Lights/PointLight3D'
import MouseInteractions from './MouseInteractions/MouseInteractions'
import Sun3D from './Sun3D'
import VegetationGroup from './Vegetation/VegetationGroup'
import SpiralFx from './SpiralFX/SpiralFx'
import Pools from './Pools/Pools'
import Lights from './Lights/Lights'

class Scenario3D{
    constructor (obj){
        // console.log("(Scenario3D.CONSTRUCTORA): ", obj)
        this.app = obj.app
        this.project = obj.project
        this.stage = obj.stage
        this.parent3D = obj.parent3D
        //-----------------------------
        // this.BESE_MARBEL_COLOR = 0xffe8b1
        this.BESE_MARBEL_COLOR = 0xfef0ce
        this.BESE_MARBEL_COLOR = 0xffffff
        //-----------------------------
        this.cont3D = new THREE.Object3D()
        this.cont3D.name = "scenario3D"
        this.parent3D.add(this.cont3D)
        //-----------------------------
        this.app.render.renderer.shadowMap.enabled = true;
        this.app.render.renderer.shadowMap.type = THREE.PCFSoftShadowMap; // or THREE.BasicShadowMap / THREE.PCFShadowMap

        //-----------------------------
        this.stage.scene.fog = new THREE.Fog( 0xffc665, 1, 100 );
        //-----------------------------
        // this.sun = new Sun({
        //     app:this.app,
        //     project:this.project,
        //     stage:this.stage,
        //     parent3D:this.cont3D,
        //     mesh:this.stage.get_mesh_from_GLB_PROJECT("sun")
        // })

        this.lights = new Lights({
            app:this.app,
            project:this.project,
            stage:this.stage,
            scenario:this,
            parent3D:this.cont3D
        })

        //---------------------------
        // LIGHTS:
        // const dev_ambientLight = new THREE.AmbientLight(0xffffff, 0.8); // Soft white light
        // const dev_ambientLight = new THREE.AmbientLight(0xe5a860, 2.2); // Soft white light
        // this.parent3D.add(dev_ambientLight);
        //---
        // this.dev_pointLight = new PointLight3D({
        //     app:this.app,
        //     project:this.project,
        //     stage:this.stage,
        //     scenario:this,
        //     parent3D:this.cont3D,
        //     itemId:"dev_light",
        //     pointLight: new THREE.PointLight(0xffffff, 40, 100, 2) // color, intensity, distance
        // })
        // this.dev_pointLight2 = new PointLight3D({
        //     app:this.app,
        //     project:this.project,
        //     stage:this.stage,
        //     scenario:this,
        //     parent3D:this.cont3D,
        //     itemId:"dev_light2",
        //     pointLight: new THREE.PointLight(0xffdd81, 60, 100, 3) // color, intensity, distance
        // })
        // this.dev_pointLight3 = new PointLight3D({
        //     app:this.app,
        //     project:this.project,
        //     stage:this.stage,
        //     scenario:this,
        //     parent3D:this.cont3D,
        //     itemId:"dev_light3",
        //     pointLight: new THREE.PointLight(0xe9b372, 40, 100, 3) // color, intensity, distance
        // })
        //---------------------------
        // HITS :
        this.interactions = new MouseInteractions({
            app:this.app,
            project:this.project,
            stage:this.stage,
            scenario:this,
        })
        //---------------------------
        // ITEMS:
        this.arquitectureItems = new ArquitectureItems({
            app:this.app,
            project:this.project,
            stage:this.stage,
            scenario:this,
            parent3D:this.cont3D
        })
        // this.pilars = new PilarsGroup({
        //     app:this.app,
        //     project:this.project,
        //     stage:this.stage,
        //     scenario:this,
        //     parent3D:this.cont3D
        // })
        this.pools = new Pools({
            app:this.app,
            project:this.project,
            stage:this.stage,
            scenario:this,
            sunPosition:this.lights.sun.POSITION,
            sunColor:this.lights.sun.COLOR,
            parent3D:this.cont3D
        })
        this.sea = new Sea3D({
            app:this.app,
            project:this.project,
            stage:this.stage,
            scenario:this,
            scentuaryScene:this,
            sunPosition:this.lights.sun.POSITION,
            sunColor:this.lights.sun.COLOR,
            parent3D:this.cont3D
        })
        this.sun3D = new Sun3D({
            app:this.app,
            project:this.project,
            stage:this.stage,
            scenario:this,
            parent3D:this.cont3D
        })

        // this.spiralFx = new SpiralFx({
        //     app:this.app,
        //     project:this.project,
        //     stage:this.stage,
        //     scenario:this,
        //     parent3D:this.cont3D
        // })



    }
    //----------------------------------------------
    // PUBLIC:
    
    //----------------------------------------------
    // EVENTS:
    update_RAF(){
        this.sea?.update_RAF()
        this.pools?.update_RAF()
        this.interactions?.update_RAF()
        this.spiralFx?.update_RAF()
        //--
        // this.vegetation?.update_RAF()
    }
    //----------------------------------------------
    // PRIVATE:

    //----------------------------------------------
    // AUX:

  
}
export default Scenario3D