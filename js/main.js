$('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: 200
});
var byline = $("div").data("byline");
$(byline).each(function(){
    $(this).text($(this).data('change'));
});
