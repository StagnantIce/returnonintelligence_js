var App = function(itemView, tableView) {
	this.itemView = itemView;
	this.tableView = tableView;
	itemView.$el.delegate('img', 'click', this.click.bind(this));
	tableView.$el.delegate('.aimage', 'click', this.click.bind(this));
	this.table_mode = true;
    window.onhashchange = this.click.bind(this)
}

App.prototype.click = function(e) {
	e.preventDefault();
	if (this.table_mode) {
		this.itemView.show($('img', $(e.currentTarget)).attr('big'));
		this.tableView.hide();
	} else {
		this.itemView.hide();
		this.tableView.show();
	}
	this.table_mode = !this.table_mode;
}