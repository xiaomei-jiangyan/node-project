function AddPosition(element){	//element指的是点击添加职位按钮弹出的div
	this.element = element;
	this.positionElem = element.find("#position");
	this.salaryElem = element.find("#salary"); 
	this.companyElem = element.find("#company"); 
	this.logoElem = element.find("#logo");
	this.bindEvents();
}

$.extend(AddPosition.prototype,{

	bindEvents: function(){
		var submitBtn = this.element.find("#submitBtn");
		submitBtn.on("click",$.proxy(this.handleSubmitBtnClick,this));
	},

	handleSubmitBtnClick:function(){
		// 创建一个表单数据的对象
		var formData = new FormData();

		formData.append("position",this.positionElem.val());
		formData.append("salary",this.salaryElem.val());
		formData.append("company",this.companyElem.val());
		formData.append("logo",this.logoElem[0].files[0]);
		
		$.ajax({
			url: '/api/position/add',
			method:"POST",
			cache:false,
			data: formData,
			processData:false,
			contentType:false,
			success: $.proxy(this.handleAddPositionSucc,this),
			error: $.proxy(this.handleAddPositionError,this)
		})
	},

	handleAddPositionSucc: function(res){
		if(res.ret && res.data){
			window.location.reload();
		}else{
			this.handleAddPositionError();
		}
	},

	handleAddPositionError: function(){
		alert("添加失败")
	}


})