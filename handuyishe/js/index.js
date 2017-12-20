require.config({
	paths:{
		"index":"js/index"
	}
});
alert("jsonp 搜索框  ，二级导航，选项卡，轮播图，手风琴，购物车，回到顶部");
//网站导航显示部分
	$("#daohang").mouseenter(function(){
	 $("._daohang").css("display","block");
	})
    $("#_nav a").click(function(){
		  $("._daohang").css("display","none");
	})
    $("#_nav").mouseleave(function(){
   	  $("._daohang").css("display","none");
   })
    //搜索部分搜索框获取cookie
   var arr=[];
   var set1 = new Set();
    _btn.onclick=function(){
    	arr.push(col.value);
    	arr.forEach(function(value,index){
    		set1.add(value);
    	})
    	var a=Array.from(set1);
    	setCookie("valu",a,7); 
     }
   col.onfocus=function(){
   	_co.style.display="block";
   	_co.style.backgroundColor="#F5DEB3";
   	 var arr1=getCookie("valu");
   	    var arr2=Array.from(arr1);
   	    col.value="";
   	    _co.innerHTML="";
        arr2.forEach(function(value,index){
        $("col").css({"color":"black","fontSize":"12px","fontWeight":"bold" });
        var li=document.createElement("li");
        li.innerHTML=value;
        _co.appendChild(li);
     })
   }
   col.onblur=function(){
   		_co.style.display="none";
   }
   //二级导航鼠标滑过显示部分
   //鼠标滑过大商品分类时然后显示
   $("._sort").mouseover(function(){
   	 $(".goods").css("display","block");
   });
   $(".goods").mouseleave(function(){
   	 $(".goods").css("display","none");
   })
   //全部商品分类
   $(".all_goods").mouseover(function(){
      $("._all").css("display","block");
      $(".all_goods").css({"background":"#666","color":"white"});
      $(".all_goods p").stop().animate({
      	textIndent:6,
      },200)
   }).mouseleave(function(){
      $("._all").css("display","none");
      $(".all_goods").css({"background":"","color":""});
      $(".all_goods p").stop().animate({
      	textIndent:2,
      },200)
   })
   //精选推荐
   $("._jxtj").mouseover(function(){
     $(".first").css("display","block");
     $("._jxtj").css({"background":"#666","color":"white"});
      $("._jxtj p").stop().animate({
      	textIndent:6,
      },200)
   }).mouseleave(function(){
     $(".first").css("display","none");
      $("._jxtj").css({"background":"","color":""});
      $("._jxtj p").stop().animate({
      	textIndent:2,
      },200)
   })
    //潮流女装
    $(".clnz").mouseover(function(){
    	$(".one").css("display","block");
    	$(".clnz").css({"background":"#666","color":"white"});
    	 $(".clnz p").stop().animate({
      	textIndent:6,
      },200)
    }).mouseleave(function(){
    	$(".one").css("display","none");
        $(".clnz").css({"background":"","color":""});
        $(".clnz p").stop().animate({
      	textIndent:2,
      },200)
    })
    //可爱童装
    $(".katz").mouseover(function(){
    	$(".cute").css("display","block");
    	$(".katz").css({"background":"#666","color":"white"});
    	 $(".katz p").stop().animate({
      	textIndent:6,
      },200)
    }).mouseleave(function(){
    	$(".cute").css("display","none");
    	$(".katz").css({"background":"","color":""});
    	 $(".katz p").stop().animate({
      	textIndent:2,
      },200)
    })
    //时尚妈妈
    $(".shmm").mouseover(function(){
    	$(".fashion").css("display","block");
    	$(".shmm").css({"background":"#666","color":"white"});
    	 $(".shmm p").stop().animate({
      	textIndent:6,
      },200)
    }).mouseleave(function(){
    	$(".fashion").css("display","none");
    	$(".shmm").css({"background":"","color":""});
    	$(".shmm p").stop().animate({
      	textIndent:2,
      },200)
    })
    //韩风男装
    $(".hfnz").mouseover(function(){
    	$(".hfnz").css({"background":"#666","color":"white"});
    	 $(".hfnz p").stop().animate({
      	textIndent:6,
      },200)
    }).mouseleave(function(){
    	$(".hfnz").css({"background":"","color":""});
    	$(".hfnz p").stop().animate({
      	textIndent:2,
      },200)
    })
    //明星同款
    $(".mxtk").mouseover(function(){
    	$(".mxtk").css({"background":"#666","color":"white"});
    	 $(".mxtk p").stop().animate({
      	textIndent:6,
      },200)
    }).mouseleave(function(){
    	$(".mxtk").css({"background":"","color":""});
    	$(".mxtk p").stop().animate({
      	textIndent:2,
      },200)
    })
    //韩都资讯显示
    $(".hdzx").mouseover(function(){
    	$("._hdzx").css("display","block");
    })
    $("._hdzx").mouseleave(function(){
    	$("._hdzx").css("display","none");
    })
    //首页轮播图效果
    var i=1;
    //console.log(i);
    function lb(){
        $(".content").eq(i).css({"display":"block","zIndex":"4"});
        $(".tab li").eq(i).css({"background":"#7b7b7b","color":"white"})
        //console.log($(".content"));
        $(".content").not(":eq("+i+")").css({"display":"none","zIndex":"2"});
        $(".tab li").not(":eq("+i+")").css({"background":"white","color":"black"})
        i++;
      //  console.log(i);
        if(i>=3)i=0;
   }
    var timer=setInterval(lb,5000);
  //首页轮播图click事件
  $(".tab li").mouseover(function(){
  	//console.log($(this).index());
     $(".content").eq($(this).index()).css({"display":"block","zIndex":"4"});
     $(".content").not(":eq("+$(this).index()+")").css({"display":"none","zIndex":"2"});
     $(this).css({"background":"#7b7b7b","color":"white"});
     $(".tab li").not(":eq("+$(this).index()+")").css({"background":"white","color":"black"});
})
  //品牌左半边mouseover事件
  $("._ppli a").mouseover(function(){
  	$(this).find("span").css({"display":"block"});
  	$(this).find("a").css({"backgroundSize":"100% 100%"});
  }).mouseout(function(){
  	$(this).find("span").css({"display":"none"});
  })
//韩都动态，明星家族，媒体报道，无穷花开选项卡部分
$("._toptext").find("div").mouseover(function(){
	for(var i=0;i<4;i++){
		$("._bottom>div").stop().eq(i).css("display","none");
	}
	$("._bottom>div").stop().eq($(this).index()).css("display","block");
})
//新品上市new arrival部分选项卡加轮播图部分：上面五个选项滑过有红色背景
$("._newArrtop ul").find("li").mouseover(function(){
	clearInterval(timer1);
	for(var i=0;i<6;i++){
	   $("._newArrtop ul").find("li").eq(i).css({"background":""});	
	  $("._newArrtop li").find("a").eq(i).css("color","#666");
	  $("._newArrbottom>div").eq(i).css("display","none");
	}
	$(this).css("background","red");
	$(this).find("a").css("color","#fff");
	$("._newArrbottom>div").eq($(this).index()).css("display","block");
})
//韩风女装 甜美少女 迪葵纳  韩风男装 韩风童装轮播
var j=0;
function startLB(){
	for(var i=0;i<=4;i++){
	  $("._newArrbottom>div").eq(i).fadeOut();
	  $("._newArrtop ul").find("li").eq(i).css({"background":""});	
	  $("._newArrtop li").find("a").eq(i).css("color","#666");
	}
	
	$("._newArrbottom>div").eq(j).fadeIn();
	//console.log(j);
	$("._newArrtop ul").find("li").eq(j).css({"background":"red"});	
	$("._newArrtop li").find("a").eq(j).css("color","#fff");
	if(j==4) j=-1;
	j++;
	
}
var timer1=setInterval(startLB,3000);
//鼠标离开韩风女装 甜美少女 迪葵纳  韩风男装 韩风童装时开始定时器
 $("._newArrtop li").mouseout(function(){
 	timer1=setInterval(startLB,3000);
 })
//全智贤边上手风琴效果
$("._hsrx>ul>li").mouseover(function(){
	//console.log($(this).index());//0-7;
	$("._hsrx h2").stop().eq($(this).index()).css("display","none");
    $("._hsrx h2").stop().not(":eq("+$(this).index()+")").css("display","block");
	$(".hot_con").stop().eq($(this).index()).css("display","block");
	$(".hot_con").stop().not(":eq("+$(this).index()+")").css("display","none");
})
//页面上方滚动条
var t;
window.onscroll=function(){
   t=document.documentElement.scrollTop||document.body.scrollTop;
   //console.log(t);
   if(t>=800){
	    $(".ck").css("display","block");
	    $(".guide_A").css("display","block");
    }else{
	    $(".ck").css("display","none");
	    $(".guide_A").css("display","none");
  }
}

//搜索框jsonp
function jsonp(url){
	var script=document.createElement("script");
	document.getElementsByTagName("head")[0].appendChild(script);
	script.src=url;
}

function callback(obj){
	_co.innerHTML="";
	var arr=Array.from(obj.s);
	arr.forEach(function(value,index){
		var li=document.createElement("li");
		_co.appendChild(li);
		li.innerHTML=value;
	})
}
col.onkeyup=function(){
	var str = col.value;
	jsonp("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?cb=callback&wd="+str);
}
//购物车部分
var sd = $(".clothes_btn");

var imgss = Array.from(document.getElementsByClassName("clothes_btn"));
 imgss.forEach(function(val,ind){
	val.setAttribute("num",ind);
 })
$(".clothes_btn").click(function(){
	//console.log($(this)[0]);
	var ind = this.getAttribute("num");
	//console.log(ind);
	var a = $(this).parent()[0];
	var b = $(this).find(".newPrice").innerHTML;
	//父亲li
	var li=this.parentNode;
	//商品价格
	var price=this.parentNode.children[1].children[0].children[0].innerHTML;
	//图片
	var img=this.parentNode.children[0].children[0];
	//图片路径
	var way=this.parentNode.children[0].children[0].src;
	//
    var way1= getCookie("img"+ind);
    if(way1){
       var num1 = way1.num;
       num1++;
       setCookie("img"+ind,{"ind":ind,"src":img.src,"num":num1,"money":price},10);
    }else{
       setCookie("img"+ind,{"ind":ind,"src":img.src,"num":1,"money":price},10);
    }
	var img1=document.createElement("img");
	img1.style.position="absolute";
    li.appendChild(img1);
    img1.src=way;
    img1.style.width="230px";
    img1.style.height="230px";
    img1.style.left=img.offsetLeft+"px";
    img1.style.top=img.offsetTop+"px";
    //console.log($(".arr_three").offset().top);
    img1.style.zIndex="999";
    //图片飞起来  购物车的位置
    var cw=document.documentElement.clientWidth||document.body.clientWidth;
    var st=document.documentElement.scrollTop||document.body.scrollTop;
    startMove(img1,{"left":cw-82,"top":100+st,"width":72,"height":80},function(){
    	li.removeChild(img1);
    });
    //console.log(100+st,cw-82)
 });
 //回到顶部
 $(".backTop").click(function(){
   document.documentElement.scrollTop = document.body.scrollTop =0;
 })
//邮箱订阅正则表达式验证
btn_mail.onclick=function(){
   var _mail=mail.value;
   var pattern=/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
   if(_mail!=""&&pattern.test(_mail)){
	   _Mail.style.display="block";
	   _Mail.innerHTML="邮箱正确，已订阅成功";
   }
   else{
     _Mail.style.display="block";
   	 _Mail.innerHTML="请重新输入邮箱";
   }
}
 