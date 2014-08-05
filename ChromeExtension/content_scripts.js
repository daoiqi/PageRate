loadCSS = function(href) {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.href = href;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    head.appendChild(link);
 };

/**
 * function to load a given js file 
 */ 
loadJS = function(src) {
    var jsLink = $("<script type='text/javascript' src='"+src+"'>");
    $("head").append(jsLink); 
}; 






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

