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