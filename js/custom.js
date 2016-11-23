$('.video-toggle, .video-dim, .video-close').click(function(){
  $("iframe").toggleClass('open');
  $(".video-close").toggleClass('open');
  $(".dim").toggleClass('open');
  $(".video-container").toggleClass('open');
  $(".container").toggleClass('shrink');
});
