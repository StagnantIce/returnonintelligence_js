var Item = function(id) {
	this.id = id;
	this.thumb = null;
	this.is_loaded = false;
	this.$el = null;
}

Item.prototype.render = function($obj) {
	this.$el = $('<div></div>');
	this.$el.append('<img style="cursor:pointer" big="'+this.image+'" src="'+this.thumb+'"/>');
	this.$el.append('<a href="javascript:void(0)">&gt;&gt;</a>');
	$obj.append(this.$el);
}

Item.prototype.load = function() {
	api.apply(this, ['flickr.photos.getSizes', 'loaded', this.id]);
}

Item.prototype.loaded = function(obj) {
	this.thumb = obj.sizes.size[0].source;
	this.is_loaded = true;
	this.image = obj.sizes.size[6].source;
}