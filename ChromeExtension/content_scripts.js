






$(function($,win) {
	var css = chrome.extension.getURL("css/style.css");
	console.log(css);
	loadCSS(css);


	function insertRate(argument) {
		$div = $("<div class='daoiqi_pagerate'><div class='daoiqi_pagerate_rankButton'>评分</div></div>");
		$div.appendTo("body");
		console.log(123);
		console.log($div);
	} insertRate();
}($,window));

