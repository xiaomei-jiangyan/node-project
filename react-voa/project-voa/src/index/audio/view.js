import React,{Component} from "react";
import style from "./style.mcss"
export default class Tag extends Component{
	constructor(props){
       super(props)
       this.isPlaying=false;
      this.color= this.color.bind(this);
	}
	render(){
		return (
           <div className={style["audio"]}>
               <audio id={style['audio']} controls="controls" ref="audioSource">
					<source src={require("./1.mp3")} type="audio/mpeg" />
				</audio>

				<div id={style['palyOrPause']}  onClick={this.clickEvent.bind(this)}>music</div>
           </div>
	  )
	}
	clickEvent(e){
        var audio=this.refs.audioSource;
	    if (this.isPlaying) {
			audio.pause();
			e.target.innerHTML="stop";
			e.target.style.background=this.color();
		}else {
			audio.play();
			e.target.innerHTML="music";
			e.target.style.background=this.color();
		}
		this.isPlaying = !this.isPlaying;
	}
   color(){
          var r=Math.floor(Math.random()*256);
          var g=Math.floor(Math.random()*256);
          var b=Math.floor(Math.random()*256);
          return "rgb("+r+','+g+','+b+")";
         }
}