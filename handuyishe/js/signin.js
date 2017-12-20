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
    //登陆页面验证码显示
    function ran(){
	return parseInt(Math.random()*61);
}
function Comfirm_code(){
	var str="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	var s1=ran();
	var s2=ran();
	var s3=ran();
	var s4=ran();
	Code_a.innerHTML=""+str[s1]+str[s2]+str[s3]+str[s4];
}
Comfirm_code();