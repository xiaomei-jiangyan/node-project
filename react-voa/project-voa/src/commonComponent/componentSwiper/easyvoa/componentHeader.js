import React,{Component} from "react";
import style from  "./style.mcss";

import axios from "axios";

export default class ComponentHeader extends Component{
	constructor(props){
        super(props);
        this.handleSucc=this.handleSucc.bind(this);
        this.state={
        	list:[]
        }
	}
	  render(){
	  	return (
             <div className={style['header']}>
                <img alt="easyvoa" title="easyvoa" src={require("../../../static/newlogo.png")} />
                <ul className={style['header-list']}>
                   {this.state.list.map((item,index)=>{
                        return <li key={item.id}>{item.text}</li>
                      })}
                </ul> 
             </div>
	  		)
	}
	
	componentDidMount(){
              axios.get("/api/header.json").then(this.handleSucc); 
	       
      }
	  	
	handleSucc(res){
          var list= res.data.list.headerList;
          
           this.setState({
           	  list:list
           })

	}
}
