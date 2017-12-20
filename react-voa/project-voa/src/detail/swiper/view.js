import React,{Component} from "react"
import Swiper from "../../../node_modules/swiper/dist/js/swiper.js"
export default class swiper extends Component{
	render(){
		return(
             <div className='swiper-container'>
			    <div className='swiper-wrapper'>
			      <div className='swiper-slide'><img alt="one" src={require("./images/one.jpg")}/></div>
			      <div className='swiper-slide'><img alt="two" src={require("./images/two.jpg")}/></div>
			      <div className='swiper-slide'><img alt="three" src={require("./images/three.jpg")}/></div>
			      <div className='swiper-slide'><img alt="four" src={require("./images/four.jpg")}/></div>
			    </div>
			    <div className="swiper-pagination"></div>
			  </div>
         )
	}
	componentDidMount(){
		this.handle();
	}
	handle(){
        new Swiper('.swiper-container', {
      	  autoplay:true,
	      spaceBetween: 30,
	      pagination: {
	        el: '.swiper-pagination',
	        clickable: true,
	      },
	    });
	}
}