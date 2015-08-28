var Item = function(id) {
	this.id = id;
	this.thumb = null;
	this.is_loaded = false;
	this.$el = null;
	this.url = '';
}

Item.prototype.render = function($obj) {
	this.$el = $('<div></div>');
	this.$el.append('<a class="aimage" href="#'+this.id+'"><img style="cursor:pointer;border:0px;" big="'+this.image+'" src="'+this.thumb+'"/></a>');
	this.$el.append('<a target="__blank" href="'+this.url+'">&gt;&gt;</a>');
	$obj.append(this.$el);
}

Item.prototype.load = function() {
	api.apply(this, ['flickr.photos.getSizes', 'loaded', this.id]);
}

Item.prototype.loaded = function(obj) {
	if (obj.sizes) {
		this.thumb = obj.sizes.size[0].source;
		this.is_loaded = true;
		this.url = obj.sizes.size[0].url.replace('sizes/sq/','')
		this.image = obj.sizes.size[obj.sizes.size.length-2].source;
	} else {
		alert('Image error loading. Please retry.')
	}
}