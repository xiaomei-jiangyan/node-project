function Page(){
	this.container = $("#headerContainer");
}

$.extend(Page.prototype, {

	init: function() {
		this.createHeader();
		this.createAddPosition();
		this.createPagination();
		this.createPositionList();
	},

	createHeader: function() {
		this.header = new Header(this.container,'list');
	},

	createAddPosition: function(){
		var modalElem = $("#positionModal");
		this.addPosition = new AddPosition(modalElem);
	},

	createPositionList: function() {
		var listTable = $("#js-listTable");
		this.listTable = new PositionList(listTable);
		$(this.listTable).on("change",$.proxy(this.handleListChange,this));
	},

	createPagination: function() {
		var pgContainer = $("#pagination");
		this.pagination = new Pagination(pgContainer);
		$(this.pagination).on("change",$.proxy(this.handlePageChange,this));
		

	},

	handleListChange: function(e) {
		this.pagination.render(e.total);
	},

	handlePageChange: function(e) {
		this.listTable.changeList(e.num);
		
	}

})

var page = new Page();
page.init();