var ItemDetail = function($el) {
	this.$el = $el;
}

ItemDetail.prototype.hide = function() {
	this.$el.slideUp();
}

ItemDetail.prototype.show = function(image) {
	this.$el.html('');
	this.$el.hide();
	this.$el.append($('<img style="cursor:pointer" id="detail" src="'+ image+'">'));
	this.$el.slideDown();
}
