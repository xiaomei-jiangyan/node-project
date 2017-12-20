function Register(container) {
	this.container = container;
	this.createDom();
	// 绑定事件
	this.bindEvents();
}

Register.Template = `
<div class="modal fade" id="registerModal"  role="dialog" aria-labelledby="registerModalLabel">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<h4 class="modal-title" id="registerModalLabel">注册</h4>
			</div>
			<div class="modal-body">
				<form>
				  <div class="form-group">
				    <label for="registerUser">用户名</label>
				    <input type="text" class="form-control" id="registerUser" placeholder="用户名">
				  </div>
				  <div class="form-group">
				    <label for="registerPassword">密码</label>
				    <input type="password" class="form-control" id="registerPassword" placeholder="密码">
				  </div>
				</form>
				<div class="alert alert-success hide" id="js-registerSucc">注册成功</div>
				<div class="alert alert-danger hide" id="js-registerError">用户名已经被注册</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-primary" id="js-registerBtn">注册</button>
			</div>
		</div>
	</div>
</div>
`;

$.extend(Register.prototype,{
	createDom: function() {
		this.element = $("<div></div>").append(Register.Template);
		this.registerModalElem = this.element.find('#registerModal');
		this.successElem = this.element.find("#js-registerSucc");
		this.errorElem = this.element.find("#js-registerError");
		this.container.append(this.element);
	},

	bindEvents: function(){
		var submitBtn = this.element.find("#js-registerBtn");
		// proxy的作用是改变作用域this的指向
		submitBtn.on("click",$.proxy(this.handleSubmitBtnClick,this));
	},

	handleSubmitBtnClick: function(){
		var name = this.element.find("#registerUser").val(),
			password = this.element.find("#registerPassword").val();
		
		$.ajax({
			url: "/api/user/register",
			type: "POST",
			data: {
				name : name,
				password: password
			},
			success: $.proxy(this.hanleSubmitSucc,this),
			error: $.proxy(this.hanleSubmitError,this)

		})
	},
//ret代表服务器请求成功
	hanleSubmitSucc: function(response){
		if(response.ret && response.data){
			this.successElem.removeClass("hide");
			setTimeout($.proxy(this.handleTimeoutFinish,this),3000);
		}else{
			this.errorElem.removeClass("hide");
			setTimeout($.proxy(this.handleErrorTimeoutFinish,this),3000);
		}
	},

	handleTimeoutFinish: function(){
		this.successElem.addClass("hide");
		this.registerModalElem.modal('hide');
	},
	handleErrorTimeoutFinish: function(){
		this.errorElem.addClass("hide");
	},

	hanleSubmitError: function(response){
		alert("请求失败");
	}
})
