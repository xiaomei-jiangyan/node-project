import React,{Component} from "react";
import  style from "./style.mcss"
export default class Tag extends Component{
	render(){
		return (
           <div className={style['tail']}>
              <div className={style['tail-version']}>
                  本网站 <span className={style['tail-text']}>EasyVOA</span> 开发上线 © 2011-2014 <span className="tail-text">手机版EasyVOA</span>
              </div>
              <p className={style['tail-version']}>网站所有内容，均来自VOA官方网站，所有资料均只作为英文学习资料使用。 站长QQ:1801785742 欢迎联系合作</p>
              <div className={style['tail-gif']}>
                <img alt="shop" src={require("../../../static/icon.gif")}/>
              </div>
           </div>
	  )
	}
}