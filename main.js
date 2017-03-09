$.extend({
    replaceTag: function (currentElem, newTagObj, keepProps) {
        var $currentElem = $(currentElem);
        var i, $newTag = $(newTagObj).clone();
        if (keepProps) {//{{{
            newTag = $newTag[0];
            newTag.className = currentElem.className;
            $.extend(newTag.classList, currentElem.classList);
            $.extend(newTag.attributes, currentElem.attributes);
        }//}}}
        $currentElem.wrapAll($newTag);
        $currentElem.contents().unwrap();
        // return node; (Error spotted by Frank van Luijn)
        return this; // Suggested by ColeLawrence
    }
});

$.fn.extend({
    replaceTag: function (newTagObj, keepProps) {
        // "return" suggested by ColeLawrence
        return this.each(function() {
            jQuery.replaceTag(this, newTagObj, keepProps);
        });
    }



//featured Styles //

var $featured = $(".featured");
var article = $("article .article");
  article.addClass(".featured");



$('p').readRemaining();
$('article').readRemaining({
  showGaugeDelay   : 1000,           // Delay before showing the indicator.
  showGaugeOnStart : true,          // Show the gauge initially, even before the user scroll.
  timeFormat       : '%mm %ss left', // Will replace %m and %s with minutes and seconds.
  maxTimeToShow    : 20*60,          // Only show time if is lower than x minutes (multiplied to seconds).
  minTimeToShow    : 10,             // Only show time if is higher than x seconds (If it's less than 10 seconds... just read).
  gaugeContainer   : 'section',             // The element where the gauge will append. If left '', the container will be the same scrolling element.
  insertPosition   : 'append',       // 'append' or 'prepend' as required by style
  gaugeWrapper     : '#content',             // Optional, the element that define the visible scope for the gauge. If left "", the gauge will be visible all along.
  topOffset        : 0,              // Distance between the top of the gaugeWrapper and the point where the gauge will start to appear. Some designs require this.
  bottomOffset     : 0               // Distance between bottom border where the box will appear and the bottom of the element.
});


$(window).width( >= 400)({
('span.navbar-link-heading').replaceTag('<a class=navbar-link-heading href=index.html>', false);
)};
document.onload = function() {
// Execute function on load through self-invocation
var switchAlt = function() {
    // Get all images on the document
    var images = document.getElementsByTagName('img');

    // Count the number of image elements and switch alt and src
    var i = images.length;
    while (i--) {
        images[i].src = images[i].alt;
    }
}();
};
