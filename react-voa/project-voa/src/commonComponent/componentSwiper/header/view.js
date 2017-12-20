import React,{Component} from "react";
import axios from  "axios"
import style from "./index.mcss"
export default class Head extends Component{
	constructor(props){
		super(props);
		this.handleSucc=this.handleSucc.bind(this);
		this.state={
			normalEnglish:[],
			slowEnglish:[],
			fashionEnglish:[]
		}
	}
	  render(){
	  	return (
               <div className={style['indexList']}>
	               <div className={style['normal']}>
		                  <h1>常速英语</h1>
		                  {
		                  	this.state.normalEnglish.map((item,index)=>{
		                        return <li key={item.id}>{item.text}</li>
		                  	})
		                  }
		            </div>
		            <div className={style['slow']}>
		                  <h1>慢速英语（中级）</h1>
		                  {
		                  	this.state.slowEnglish.map((item,index)=>{
		                        return <li key={item.id}>{item.text}</li>
		                  	})
		                  }
		            </div>
		            <div className={style['fashion']}>
		                  <h1>初级英语（教学）</h1>
		                  {
		                  	this.state.fashionEnglish.map((item,index)=>{
		                        return <li key={item.id}>{item.text}</li>
		                  	})
		                  }
		            </div>
               </div>
	  		)
	}
	componentDidMount(){
       axios.get("/api/index.json").then(this.handleSucc);
	}
	handleSucc(res){
        var indexList=res.data;
        this.normalEnglish=indexList.normalEnglish;
        this.slowEnglish=indexList.slowEnglish;
        this.fashionEnglish=indexList.fashionEnglish
        this.setState({
        	normalEnglish:this.normalEnglish.normal,
        	slowEnglish:this.slowEnglish.slow,
        	fashionEnglish:this.fashionEnglish.fashion
        })
       
	}
}