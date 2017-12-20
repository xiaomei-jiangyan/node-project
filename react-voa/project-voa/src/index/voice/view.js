import React,{Component} from "react"
import style from "./style.mcss"
import axios from "axios"
export default class Voice extends Component{
	constructor(props){
		super(props);
		this.handleSucc=this.handleSucc.bind(this);
		this.state={
			list:[]
		}
		this.handleEnterEvent=this.handleEnterEvent.bind(this);
		this.handleLeaveEvent=this.handleLeaveEvent.bind(this);
	}
	render(){
		return(
         <div className={style['voiceUS']}>
   	         <h1 className={style['redVoice']}>VOA(美国之音) 慢速英语 常速英语 官网最新内容在线收听</h1>
             <div className={style['list-voice']}>
	             <ul className={style['voice-item']}>
	          			{this.state.list.map((item,index)=>{
	                       return <li key={item.id} >
	                          <font className={style['voice-title']} onMouseEnter={this.handleEnterEvent} onMouseLeave={this.handleLeaveEvent} color={item.classOne} >{item.title}</font>
	                          <font className={style['voice-text']} color={item.classTwo}>{item.text}</font></li>
	          			})}
	             </ul>
             </div>
         </div>
      )
	}
	componentDidMount(){
       axios.get("/api/voice.json").then(this.handleSucc);
	}
	handleSucc(res){
		this.list=res.data.list
	    
		this.setState({
			list:this.list
		})
	}
	handleEnterEvent(e){
	
        e.target.style.marginLeft="15px";
        //return fla
     }
    handleLeaveEvent(e){
		
        e.target.style.marginLeft="10px";
     }
}