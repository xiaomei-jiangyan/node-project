function Pagination(container) {
	this.container = container;
	this.bindEvents();
}

Pagination.Template = `
	<% for(var i=0; i < count; i++) { %>
		 <li><a href="javascript:void(0)"><%= i+1 %></a></li>
	<% } %>
`;


$.extend(Pagination.prototype,{
	render: function(total) {
		var str = new EJS({
			text: Pagination.Template
		}).render({
			count: total
		})

		this.container.html(str);
	},

	bindEvents: function() {
		this.container.on("click","li",$.proxy(this.handlePageClick,this));
	},

	handlePageClick: function(e){
		//a标签
		// console.log(e.target.text);
		//给谁委托的事件，currentTarget指向的就是谁，这里指的是li
		// console.log(e.currentTarget);
		var target = $(e.target),
			pageNumber = parseInt(target.text(),10);
		$(this).trigger(new $.Event("change",{
			num: pageNumber
		}))
	}

	
})