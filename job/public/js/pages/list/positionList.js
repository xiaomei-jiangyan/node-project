function PositionList(element){
	this.element = element;
	this.tbody = element.find("tbody");
	this.bindEvents();
	this.getListData();

}

PositionList.Template = `
	<% for(var i=0; i<list.length; i++) { %>
		<tr>
			<td><%= (i+1) %></td>
			<td><%= list[i].position %></td>
			<td><%= list[i].salary %></td>
			<td><%= list[i].company %></td>
			<td>
				<% if(list[i].logo){ %>
				<img width="100" height="30" src="/uploads/<%= list[i].logo %>"/>
				<% }else{ %>
					 暂未上传
				<% } %>
			</td>
			<td><span id="<%= list[i]._id %>" class="js-deleteBtn" style="cursor:pointer;">删除</span> 修改</td>
		</tr>
	<% } %>
`;


$.extend(PositionList.prototype,{

	bindEvents: function() {
		this.element.on("click",".js-deleteBtn",$.proxy(this.handleDeleteClick,this));
	},

	handleDeleteClick: function(e) {
		var target = $(e.target);
		$.ajax({
			url: '/api/position/delete',
			data: {
				id: target.attr("id")
			},
			success: $.proxy(this.handleDeleteSucc,this)
		})
	},

	handleDeleteSucc: function(res){
		if(res.ret && res.data){
			this.changeList();
		}
	},

	getListData: function(page){
		
		$.ajax({
			url:"/api/position/getList",
			data:{
	
					page : page || 1,
					count: 20
	
			},
			success: $.proxy(this.handleGetListSucc,this)
		})
	},

	handleGetListSucc: function(res){
		$(this).trigger(new $.Event("change",{
			total: res.data.total
		}))

		var str = new EJS({
			text:PositionList.Template
		}).render({
			list:res.data.list
		});
		this.tbody.html(str);
	},

	changeList: function(page) {
		if(page){
			this.nowPage = page;			
		}
		$.ajax({
			url:"/api/position/getList",
			data:{
					page : page || this.nowPage,
					count: 20
			},
			success: $.proxy(this.handleGetChangeListSucc,this)
		})
	},

	handleGetChangeListSucc: function(res){
		for (var i = 0; i < res.data.list.length; i++) {
			var item = res.data.list[i];
			item.position = item.position.replace(/</,"&lt");
		}

		var str = new EJS({
			text:PositionList.Template
		}).render({
			list:res.data.list
		});
		this.tbody.html(str);
	}
})