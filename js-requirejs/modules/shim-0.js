$(window).on('scroll', function(){
  var scrollTop = $(window).scrollTop();
  if(scrollTop > 370){
    $('.navbar').hide();
  }else{
    $('.navbar').show();
  }
})