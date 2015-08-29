var Table = function($el) {
	this.items = [];
	this.$el = $el;
	this.columns = 10;
	this.max = 20;
	this.selected = '';
	this.$el.delegate('img', 'click', this.click.bind(this));
}

Table.prototype.render = function() {
	this.$el.html('');
	var $t = $('<table><tbody></tbody></table>');
	for (var i = 0; i < this.items.length; i++) {
		if (i % this.columns == 0) {
			$tr = $('tbody', $t).append('<tr></tr>');
		}
		var $td = $tr.append('<td></td>');
		this.items[i].render($td);
	}
	this.$el.append($t);
}

Table.prototype.waitLoaded = function() {
	for(var i = 0;i < this.items.length; i++) {
		if (this.items[i].is_loaded == false) {
			setTimeout(this.waitLoaded.bind(this), 100);
			return;
		}
	}
	this.render();
}

Table.prototype.loaded = function(obj) {
	this.$el.html('Please wait...');
	var photos = obj.photos.photo;
	for(var i = 0;i < photos.length; i++) {
		if (i >= this.max) {
			break;
		}
		var item = new Item(photos[i].id);
		this.items.push(item);
		item.load();
	}
	this.waitLoaded();
}

Table.prototype.hide = function() {
	$('table', this.$el).slideUp();
}

Table.prototype.show = function() {
	$('table', this.$el).slideDown();
}

Table.prototype.click = function(e) {
	this.selected = $(e.currentTarget).attr('big');
}
