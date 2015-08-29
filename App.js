var App = function(itemView, tableView) {
	this.itemView = itemView;
	this.tableView = tableView;
	this.table_mode = true;
	itemView.$el.delegate('img', 'click', this.click.bind(this));
}

App.prototype.click = function(e) {
	if (this.table_mode) {
		this.itemView.show(this.tableView.selected);
		this.tableView.hide();
	} else {
		this.itemView.hide();
		this.tableView.show();
	}
	this.table_mode = !this.table_mode;
}