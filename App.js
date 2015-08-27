var App = function(itemView, tableView) {
	this.itemView = itemView;
	this.tableView = tableView;
	itemView.$el.delegate('img', 'click', this.click.bind(this));
	tableView.$el.delegate('img', 'click', this.click.bind(this));
	this.table_mode = true;
}

App.prototype.click = function(e) {
	if (this.table_mode) {
		this.itemView.show($(e.currentTarget).attr('big'));
		this.tableView.hide();
	} else {
		this.itemView.hide();
		this.tableView.show();
	}
	this.table_mode = !this.table_mode;
}