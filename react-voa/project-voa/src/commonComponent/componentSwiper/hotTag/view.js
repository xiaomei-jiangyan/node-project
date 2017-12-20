import React,{Component} from  "react";
import style from  "./style.mcss"
export default class HotTag extends Component{
	render(){
		 return(
               <div className={style['hotTag']}>
                  <h4 className={style['textHot']}>热门标签:</h4>
                  <div className={style['warning']}>google 提供的广告</div>
                  <div className={style['tag']}> 
                     <div className={style['tag-item']}>VOA慢速英语</div>
                     <div className={style['tag-item']}>VOA在线收听</div>
                     <div className={style['tag-item']}>VOA在线听</div>
                  </div>
               </div>
		)
	}
}