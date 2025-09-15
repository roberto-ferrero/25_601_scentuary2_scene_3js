//import gsap from "gsap"
import * as THREE from 'three'
import Seal from './Seal'

class Pilar3D{
    constructor (obj){
        // console.log("(Pilar3D.CONSTRUCTORA): ", obj)
        this.app = obj.app
        this.project = obj.project
        this.stage = obj.stage
        this.scenario = obj.scenario
        this.parent3D = obj.parent3D
        this.itemId = obj.itemId
        this.itemIndex = obj.itemIndex // Position of the item in the 3D space
        //-----------------------------
        this.STATE = "NORMAL" // NORMAL, UNSELECTED, SELECTED
        this.TRANSITION_PROGRESS = 0
        this.SCENT_ID = this.stage.SCENT_ARRAY[this.itemIndex]
        //-----------------------------
        this.mesh = this.stage.get_mesh_from_GLB_PROJECT(this.itemId)
        //--
        this.texture = this.stage.loader.get_texture(this.itemId)
        this.texture.flipY = false;
        //--
        this.texture_ao = this.stage.loader.get_texture(this.itemId+"_ao")
        this.texture_ao.flipY = false;

        this.texture_bump = this.stage.loader.get_texture(this.itemId+"_bump")
        this.texture_bump.flipY = false;
        //--
        // const marbleMaterial = new THREE.MeshStandardMaterial({
        //     map: this.texture, // Use the loaded texture
        //     aoMap: this.texture_ao,
        //     aoMapIntensity: 1,
        //     bumpMap: this.texture_bump,
        //     bumpScale: 1.5, // Adjust the bump scale as needed
        //     lightMap: this.texture_bump,
        //     lightMapIntensity: 1,
        //     // color: this.scenario.BESE_MARBEL_COLOR, // Ivory base color
        //     // color: new THREE.Color(0xaf8140), // Ivory base color
        //     roughness: 0.4,   // Moderate roughness for a soft shine
        //     metalness: 0.0,   // Non-metallic
        //     emissive: new THREE.Color(0xaf8140), //0xbab4b1, // Ivory base color
        //     emissiveIntensity: 0.1, // Soft glow
        // });
        const marbleMaterial = new THREE.MeshStandardMaterial({
            map: this.texture, // Use the loaded texture
            aoMap: this.texture_ao,
            aoMapIntensity: 1,
            lightMap: this.texture_bump,
            lightMapIntensity: 1.3,
            // color: this.scenario.BESE_MARBEL_COLOR, // Ivory base color
            roughness: 0.5,   // Moderate roughness for a soft shine
            metalness: 0.0,   // Non-metallic
            
            bumpMap: this.texture_bump,
            bumpScale: 5, // Adjust the bump scale as needed
   
            emissiveMap: this.texture_bump,
            emissive: new THREE.Color(0xd5b99f),
            emissiveIntensity: 0.5,
        });
        this.mesh.material = marbleMaterial
        this.mesh.castShadow = true;
        //-----------------------------
        this.parent3D.add(this.mesh)
        //-----------------------------


        //-----------------------------
        // SEAL:
        this.coin = new Seal({
            app: this.app,
            project: this.project,
            stage: this.stage,
            scenario: this.scenario,
            parent3D: this.parent3D,
            pilar: this,
            index: this.itemId.split("pilar")[1],
            SCENT_ID: this.SCENT_ID,
        })
        //-----------------------------
        this.app.emitter.on("onScentSelected", (data)=>{
            console.log((data.SCENT_ID+"/"+this.SCENT_ID));
            if(data.SCENT_ID == this.SCENT_ID){
                console.log("*1");
                this.STATE = "SELECTED"
            }else if (data.SCENT_ID == null){
                console.log("*2");
                this.STATE = "NORMAL"
            }else{
                console.log("*3");
                this.STATE = "UNSELECTED"
            };
            //this._eval_state()
        })
    }
    //----------------------------------------------
    // PUBLIC:
    
    //----------------------------------------------
    // EVENTS:

    //----------------------------------------------
    // PRIVATE:
    _eval_state(){
        console.log(this.SCENT_ID+": "+this.STATE);
        if(this.STATE == "NORMAL"){
            this.mesh.material.lightMapIntensity = 1.3
            this.mesh.material.emissiveIntensity = 0.5
        }else if(this.STATE == "UNSELECTED"){
            this.mesh.material.lightMapIntensity = 1
            this.mesh.material.emissiveIntensity = 0.3
        }else if(this.STATE == "SELECTED"){
            this.mesh.material.lightMapIntensity = 1.5
            this.mesh.material.emissiveIntensity = 0.8
        }
    }
    //----------------------------------------------
    // AUX:

  
}
export default Pilar3D