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
//注册右边验证 :手机邮箱选项卡功能
$("#phone").click(function(){
	$(".re_rb").css("display","block");
	$(".register_mail").css("display","none");
	$(".re_phone").css({"backgroundPosition":"0 -102px","color":"white"});
	$(".re_mail").css({"backgroundPosition":"0 -151px","color":"black"});
});
$(".re_mail").click(function(){
	$(".re_rb").css("display","none");
	$(".register_mail").css("display","block");
	$(".re_phone").css({"backgroundPosition":"0 -151px","color":"black"});
	$(".re_mail").css({"backgroundPosition":"0 -102px","color":"white"});
})
//手机验证js
  //手机号验证
 phone_num.onblur=function(){
 	var phoneNum=phone_num.value;
    var pattern=/^1[34578]\d{9}$/;
    if(phoneNum!=""&&pattern.test(phoneNum)){
    	return true;
     }
   }
 _code.onblur=function(){
 	var code=_code.value;
 	var pattern=/^\w+{6,24}$/;
 	if(code!=""&&pattern.test(code)){
 		_pass.innerHTML="密码格式正确";
 	}
 }
//手机验证码生成
function ran(){
	return parseInt(Math.random()*63);
}
function Comfirm_code(){
	var str="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	var s1=ran();
	var s2=ran();
	var s3=ran();
	var s4=ran();
	return str[s1]+str[s2]+str[s3]+str[s4];
}

//手机验证码显示
