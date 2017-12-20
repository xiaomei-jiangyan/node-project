var bef = document.getElementById("bef");
var arr = getCookie("arr");
if(arr){
	for(var a=0,l=arr.length-1;l>=a;l--){
		var div = document.createElement("div");
		div.innerHTML=arr[l];
		bef.insertBefore(div,bef.children[0]);
	}
}
issue.onclick=function(){
	var mes = mes_inp.value;
	var ul = document.createElement("div");
	ul.id="mes_ul";
	var li1 = document.createElement("div");
	li1.id = "user";
	li1.innerHTML="游客";
	ul.appendChild(li1);
	var li2 = document.createElement("div");
	li2.id = "cont";
	li2.innerHTML=mes;
	ul.appendChild(li2);
	var li3 = document.createElement("div");
	li3.id = "tim";
	li3.innerHTML=gettime();
	ul.appendChild(li3);
	bef.insertBefore(ul,bef.children[0]);
	arr = getCookie("arr");
	if(arr){
		arr.unshift(ul.innerHTML);
	}else{
		console.log(ul);
		arr=[ul.innerHTML];	
	}
	setCookie("arr",arr,7);
	alert("评论成功！");
	mes_inp.value="";
}

function gettime(){
	var times = new Date;
	var str = ""+times;
	str = str.split(" ");
	var tem=str[3]+"-"+getmonth(str[1])+"-"+str[2]+" "+str[4];
	return tem;
}
function getmonth(n){
	var a ;
	switch(n){
		case "Jan":
			a = 1;
			break;
		case "Feb":
			a = 2;
			break;
		case "Mar":
			a = 3;
			break;
		case "Apr":
			a = 4;
			break;
		case "May":
			a = 5;
			break;
		case "Jun":
			a = 6;
			break;
		case "Jul":
			a = 7;
			break;
		case "Aug":
			a = 8;
			break;
		case "Sep":
			a = 9;
			break;
		case "Oct":
			a = 10;
			break;
		case "Nov":
			a = 11;
			break;
		case "Dec":
			a = 12;
			break;
	}
	return a;
}
