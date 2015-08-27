function api(method, callback, photo_id) {
	/*var send = [];
	for (var p in params) {
		send.push(p + '=' + params[p]);
	}
	var url = 'https://api.flickr.com/services/rest?api_key=fb5556416c585e7bcefc669cc09851cc&method='+method+'&format=json&jsoncallback='+callback+ '&'+ send.join('&');
	$('#output').append('<script src="'+url+'"></script' + '>');
	*/
	var photo_id = photo_id || '';
	if (photo_id) {
		photo_id = '&photo_id=' + photo_id;
	}
	var caller = this;
	$.ajax({'url': 'api.php?method=' + method + photo_id, 'success': function(response) {
		caller[callback](response);
	}});
}

