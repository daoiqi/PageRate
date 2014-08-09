var css = chrome.extension.getURL("css/popup.css");
loadCSS(css);


$(function() {
    $(".popup_rate_menu").on("click","li",function(event){
        console.log($(this).attr("rate"));
    });
});