function Header(container,page){
	this.page = page || 'index';
	this.container = container;
	this.createDom();
	this.createRegister();
	this.createLogin();
	this.getLoginStatus();
	this.bindEvents();
}

Header.Template = `
<nav class="navbar navbar-inverse">
	<div class="container-fluid">
		<div class="navbar-header">
			<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
			</button>
			<a class="navbar-brand" href="#">职位管理系统</a>
		</div>

		<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			<ul class="nav navbar-nav">
				<li <%if(page == 'index') {%> class="active" <%}%> >
					<a href="index.html">首页</a>
				</li>
				<li <%if(page == 'list') {%> class="active" <%}%> >
					<a href="list.html">列表页</a>
				</li>
			</ul>
			<ul class="nav navbar-nav navbar-right" id="js-unloginArea">
				<li data-toggle="modal" data-target="#registerModal">
					<a href="#">注册</a>
				</li>
				<li data-toggle="modal" data-target="#loginModal">
					<a href="#">登录</a>
				</li>
			</ul>
			<ul class="nav navbar-nav navbar-right hide" id="js-loginArea">
				<li>
					<a href="#" id="js-loginUser"></a>
				</li>
				<li id="logoutBtn">
					<a href="#">退出</a>
				</li>
			</ul>
		</div><!-- /.navbar-collapse -->
	</div><!-- /.container-fluid -->
</nav>
`;

$.extend(Header.prototype,{
	
	createDom: function(){
		// EJS模板引擎
		var html = new EJS({text:Header.Template}).render({
			page: this.page
		});
		this.element = $("<div></div>").append(html);
		this.container.append(this.element);
		this.unloginArea = this.element.find("#js-unloginArea");
		this.loginArea = this.element.find("#js-loginArea");
		this.logoutBtn = this.element.find("#logoutBtn");
		this.loginUserElem = this.element.find("#js-loginUser");
	},
	
	createRegister: function(){
		this.register = new Register(this.container);
	},

	createLogin: function(){
		this.login = new Login(this.container);
	},

	getLoginStatus: function(){
		$.ajax({
			url: "/api/user/isLogin",
			success: $.proxy(this.handleLoginSucc,this)
		})
	},

	handleLoginSucc: function(res){
		if(res.ret && res.data.login){
			this.loginUserElem.text(res.data.username);
			this.loginArea.removeClass("hide");
			this.unloginArea.addClass("hide");
		}
	},

	bindEvents: function() {
		this.logoutBtn.on("click",$.proxy(this.handleLogout,this));
	},

	handleLogout: function(){
		$.ajax({
			url:"/api/user/logout",
			success: $.proxy(this.handleLogoutSucc,this)
		})
	},

	handleLogoutSucc: function(res){
		if(res.ret && res.data.logout){
			window.location.reload();
		}
	}
})