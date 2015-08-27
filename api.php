<?php

class Flickr {

	const API_KEY = 'fb5556416c585e7bcefc669cc09851cc';
	const URL = 'https://api.flickr.com/services/rest?';

	public function Request($method, $photo_id = null) {
		$params = array('method' => $method, 'nojsoncallback' => '1', 'format' => 'json', 'api_key' => self::API_KEY);
		if ($photo_id) {
			$params['photo_id'] = $photo_id;
		}
		header('Content-Type: application/json');
		echo file_get_contents(self::URL . http_build_query($params));
	}
}

if (isset($_GET['method'])) {
	Flickr::Request($_GET['method'], isset($_GET['photo_id']) ? $_GET['photo_id']: null);
}