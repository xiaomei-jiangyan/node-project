function Page(){
	this.container = $("#headerContainer");
}

$.extend(Page.prototype, {

	init: function() {
		this.createHeader();
	},

	createHeader: function() {
		this.header = new Header(this.container);
	}

})

var page = new Page();
page.init();