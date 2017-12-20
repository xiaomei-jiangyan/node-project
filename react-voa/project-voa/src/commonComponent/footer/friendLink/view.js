import React,{Component} from "react";
import style from "./style.mcss"
import axios from "axios"
import store from "./store.js"
export default class Tag extends Component{
    constructor(props){
         super(props);
         this.state = store.getState();
         this.handleFriendSucc=this.handleFriendSucc.bind(this)
         store.subscribe(this.handleSubscribe.bind(this));
	}
   handleSubscribe(){
    this.setState(store.getState());
  }
	render(){
		return (
           <div className={style['friend-link']}>
               <div className={style['friend-link-voa']}>VOA友情链接</div>
               <ul className={style['friend-link-list']}>
                 {this.state.list.map((item,index)=>{
                     return <li className={style['friend-link-item']} key={item.id}>{item.title}</li>
                 })} 
               </ul>
           </div>
	  )
	}
	componentDidMount(){
      axios.get("/api/friend.json").then(this.handleFriendSucc);
	}
	handleFriendSucc(res){
      const value=res.data.list;
      console.log(value);
      const action = {
        type: "add",
        value: value
       }
    store.dispatch(action);
  }
 
}