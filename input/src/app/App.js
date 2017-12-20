import React, { Component } from 'react';
import axios from "axios"
import './App.css';

class App extends Component {
  constructor(props){
     super(props);
     this.state={
      ulList:[],
      imgList:[],
      videoList:[]
     }
   this.handleInputClick=this.handleInputClick.bind(this);
   this.handleKeyUp=this.handleKeyUp.bind(this);
   this.handleLiClick=this.handleLiClick.bind(this);
   this.handleVideoClick=this.handleVideoClick.bind(this);
  }
  componentDidMount(){
    //this.i=0;
    this.flag=true;
  }
  render() {
    
    return (
      <div className="App">
          <input type="text" className="input" ref="text" onKeyUp={this.handleKeyUp}/>
          <div className="search"  onClick={this.handleInputClick}>搜索</div>

          <ul className="ulList" onClick={this.handleLiClick}>
             {this.state.ulList.map((item,index)=>{
                return <li className={"li"+item.id} key={item.id} >{item.content}</li>
             })}
          </ul>
          <ul className="imgList">
               {this.state.imgList.map((item,index)=>{
                  return ( <div className="img" key={"img"+item.id}>
                             <img key={item.id} src={item.url} alt={item.id} title={item.text}/>
                              <p  key={"a"+item.id}>{item.text}</p>
                           </div>
                          )
               })}
               <ul className="videoList" onClick={this.handleLiClick}>
                   {this.state.videoList.map((item,index)=>{
                        return  <video id="vd1" width="300"  onClick={this.handleVideoClick} key={item.id}> 
                           <source src="jerryclips/Bild01.webm" type="video/webm" id="vd1webm"/>
                           <source src={item.url}  type="video/mp4" id="vd1mp4" key={"video"+item.id}/>
                        </video>
               })}
          </ul>
          </ul>
          
      </div>
    );
  }
  handleInputClick(){
     this.setState({
      ulList:[]
    })
    axios.get("/api/img.json")
        .then(this.handleGetImgSucc.bind(this));
      
 }
 handleGetImgSucc(res){
     console.log(res.data);
     const patternImg=/[.png .jpeg .jpg]$/;
     for(var i=0;i<res.data.img.length;i++){
       if(patternImg.test(res.data.img[i].url)){
            this.setState({
              imgList:res.data.img
            })
        }

     }
     const patternVideo=/(.mp4)$/;
     for(var j=0;j<res.data.video.length;j++){
      
       if(patternVideo.test(res.data.video[j].url)){
        console.log("Ssss")
            this.setState({
              videoList:res.data.video
            })
        }
      
     }
     console.log(this.state.imgList)
    
 }
  handleGetInfoSucc(res){
   // console.log(res);
    if(res.data.ret==="true" && res.status===200){
      //console.log(res.data.data.list)
        this.setState({
          ulList:res.data.data.list
        })
    }
  }
  handleKeyUp(e){
     const code=e.which  ||  e.keyCode;
     //console.log(code)
     if(code===40){
     //console.log("aaa")
      this.i++;
      console.log(this.i)
    }
      if(this.refs.text.value==="王者"){
      axios.get("/api/input.json")
        .then(this.handleGetInfoSucc.bind(this));
      }
    
  }
  handleLiClick(e){
      var lis= document.getElementsByTagName("li");
      for(var i=0;i<lis.length;i++){
        lis[i].style.background="#eee";
      }
      //console.log(e.target);
       e.target.style.background="#32a0ff";
      //console.log(e.target.innerText);
       this.refs.text.value=e.target.innerText;
   }
   handleVideoClick(e){
     var MV = document.getElementById("vd1");
      MV.play(); 
      this.flag=!this.flag;
      if(!this.flag) MV.pause();
      console.log(this.flag)
   }

}

export default App;
