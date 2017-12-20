import React,{Component} from "react";
import "./style.mcss"
import {VoiceAmerica} from "./voice/index.js"
import {Clock} from "./clock/index.js"
import {Audio} from "./audio/index.js"
export default class Tag extends Component{
	render(){
		return (
           <div>
              <VoiceAmerica/>
              <Clock/>
              <Audio/>
           </div>
	  )
	}
}