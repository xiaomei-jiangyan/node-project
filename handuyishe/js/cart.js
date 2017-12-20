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
    
    //获取cookie
   // var str=document.cookie;
    getAllGoodsCookie(function(_name,obj){
     var tr = document.createElement("tr");
     tbody1.appendChild(tr);
   
    //商品 
    var td1=document.createElement("td");
    tr.appendChild(td1);
    var img=document.createElement("img");
    img.src=obj.src;
    img.style.width="150px";
    img.style.height="150px";
    td1.appendChild(img);
    //价格
    var td2=document.createElement("td");
    //console.log(obj.money);
    td2.innerHTML=obj.money; 
    tr.appendChild(td2);
    //数量
    var td3=document.createElement("td");
      tr.appendChild(td3);
	    //减号
	    var input1=document.createElement("input");
	    td3.appendChild(input1);
	    input1.type="button";
	    input1.value="-";
	    input1.id="_input1";
	    input1.onclick=function(){
	     _money();
	     	//console.log($(this).parent().eq(2).value);
 	     var num1=Number(input2.value);
 	     if(num1<=0){
 	     	tbody1.removeChild(tr);
 	     	setCookie("img"+obj.ind,"",-1);
 	     }
 	      num1--;
 	     input2.value=num1;
 	     var o=getCookie("img"+obj.ind);
 	    // console.log(o.length);
 	     o.num=num1;
 	     setCookie("img"+obj.ind,o,10);
 	     td4.innerHTML=input2.value * obj.money;
       }
	    //console.log(input2);
	    var input2=document.createElement("input");
	    td3.appendChild(input2);
	    input2.type="text";
	    input2.value=obj.num;
	    input2.id="_input2";
	     //加号
	    var input3=document.createElement("input");
	    input3.type="button";
	    input3.value="+";
	    td3.appendChild(input3);
	    input3.id="_input3";
	    input3.onclick=function(){
	    	_money();
	    	//console.log($(this).parent().eq(2).value);
 	     var num1=Number(input2.value);
 	     if(num1<=0){
 	     	tbody1.removeChild(tr);
 	     	setCookie("img"+obj.ind,"",-1);
 	     }
 	      num1++;
 	     input2.value=num1;
 	     var o=getCookie("img"+obj.ind);
 	     o.num=num1;
 	     setCookie("img"+obj.ind,o,10);
 	     //不能用cookie,因为每点击一次就要更新一次
 	     td4.innerHTML=input2.value* obj.money;
       }
	   // console.log(input3);
    //总价
    var td4=document.createElement("td");
    tr.appendChild(td4);
    td4.innerHTML=obj.num * obj.money;
    //操作
    var td5=document.createElement("td");
    tr.appendChild(td5);
    td5.innerHTML="删除";
    td5.style.cursor="pointer";
    //删除按钮实现
    td5.onclick=function(){
    	if(confirm("你确定删除该商品吗")){
    		tbody1.removeChild(tr);
    		var o=getCookie("img"+obj.ind);
    		console.log(o);
    		setCookie("img"+obj.ind,"",-1);
    		console.log(o);
    		
    	}
    }
   })
  //tb_right.onclick=function(){
  function _money(){
  var a=document.getElementById("tbody1");
  var arr=[];
  var b=0;
  for(var i=0;i<a.children.length;i++){
        var tr=a.children[i];
         b+=Number(tr.children[3].innerHTML);
     }
  _allprice.innerHTML="￥"+b;
 }
  _money();
  //回到顶部
  $(".backTop").click(function(){
   document.documentElement.scrollTop = document.body.scrollTop =0;
 })