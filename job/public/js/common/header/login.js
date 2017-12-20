function Login(container){
	this.container = container;
	this.createDom();
	this.bindEvents();
}

Login.Template = `
<div class="modal fade" id="loginModal"  role="dialog" aria-labelledby="loginModalLabel">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<h4 class="modal-title" id="loginModalLabel">登录</h4>
			</div>
			<div class="modal-body">
				<form>
				  <div class="form-group">
				    <label for="loginUser">用户名</label>
				    <input type="text" class="form-control" id="loginUser" placeholder="用户名">
				  </div>
				  <div class="form-group">
				    <label for="loginPassword">密码</label>
				    <input type="password" class="form-control" id="loginPassword" placeholder="密码">
				  </div>
				</form>
				<div class="alert alert-danger hide" id="js-loginError">用户名或密码错误</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-primary" id="js-loginBtn">登录</button>
			</div>
		</div>
	</div>
</div>
`;

$.extend(Login.prototype,{
	createDom: function(){
		this.element = $("<div></div>").append(Login.Template);
		this.container.append(this.element);
		this.loginBtn = this.element.find("#js-loginBtn");
		this.loginUserElem = this.element.find("#loginUser");
		this.loginPasswordElem = this.element.find("#loginPassword");
		this.loginErrorElem = this.element.find("#js-loginError");
	},

	bindEvents: function() {
		this.loginBtn.on("click",$.proxy(this.handleLoginBtnClick,this));
	},

	handleLoginBtnClick:function(){
		$.ajax({
			url: "/api/user/login",
			type:"POST",
			data:{
				name:this.loginUserElem.val(),
				password:this.loginPasswordElem.val()
			},
			success:$.proxy(this.handleLoginSucc,this),
			error:function(){}
		})
	},

	handleLoginSucc: function(res){
		if(res.ret && res.data.login){
			window.location.reload();
		}else{
			this.loginErrorElem.removeClass("hide");
			setTimeout($.proxy(this.handleTimeoutFinish,this),3000);
		}
	},

	handleTimeoutFinish: function(){
		this.loginErrorElem.addClass("hide");
	}

})

