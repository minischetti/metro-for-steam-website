$('.color').click(function selectColor(){
  //Store Color as variable
  color = $('input[name=color]:checked', '.color').val().split(",");

  //Do we need local storage for this?
  //localStorage.setItem('accentColor',color);
  //console.log(color);

  //Output Stylesheet with options
  outString = '"custom.styles"{colors{Focus="' + color[0] + '"}};'

  //Set up download link
  $('#save').attr('href','data:text/plain;charset=utf-8;base64,' + btoa(outString));
  $(".important, .action").css('color', color[1]);
});
