//featured Styles //

var $featured = $(".featured");
var article = $("article .article");
if (article).hasClass($featured){
  article.addClass(".featured")
});


  $("div").addClass(".flex-container");

  $(".article-heading--desc") function shorten(text, maxLength) {
  var ret = text;
  if (ret.length > maxLength) {
  ret = ret.substr(0,maxLength-3) + “…”;
  }
  return ret;
  }

$('p.content-body').readRemaining();
$('article').readRemaining({
  showGaugeDelay   : 1000,           // Delay before showing the indicator.
  showGaugeOnStart : false,          // Show the gauge initially, even before the user scroll.
  timeFormat       : '%mm %ss left', // Will replace %m and %s with minutes and seconds.
  maxTimeToShow    : 20*60,          // Only show time if is lower than x minutes (multiplied to seconds).
  minTimeToShow    : 10,             // Only show time if is higher than x seconds (If it's less than 10 seconds... just read).
  gaugeContainer   : '',             // The element where the gauge will append. If left '', the container will be the same scrolling element.
  insertPosition   : 'append'       // 'append' or 'prepend' as required by style
  verboseMode      : true           // Enable the console logs. For testing only.
  gaugeWrapper     : '',             // Optional, the element that define the visible scope for the gauge. If left "", the gauge will be visible all along.
  topOffset        : 0,              // Distance between the top of the gaugeWrapper and the point where the gauge will start to appear. Some designs require this.
  bottomOffset     : 0               // Distance between bottom border where the box will appear and the bottom of the element.
});
