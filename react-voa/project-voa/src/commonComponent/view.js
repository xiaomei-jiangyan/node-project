import React,{Component} from "react";
import {Easyvoa} from "./componentSwiper/easyvoa/view.js"
import {Head} from "./componentSwiper/header/index.js";
import {HotTag} from "./componentSwiper/hotTag/index.js";
import {FriendLink} from "./footer/friendLink/index.js"
import {Tail} from "./footer/tail/index.js"
export default class Tag extends Component{
	render(){
		return (
           <div>
              <Easyvoa/>
              <Head/>
              <HotTag/>
              <div>{this.props.children}</div>
              <FriendLink/>
              <Tail/>
           </div>
	  )
	}
}