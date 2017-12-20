import React,{Component} from "react";
import {Echart} from "./echart/index.js"
import {Swiper} from "./swiper/index.js"
export default class Detail extends Component{


	  render(){
	  	return (
               <div >
                  <Echart/>
                  <Swiper/>
               </div>
	  		)
	  }


} 
