//Retrieve local storage
$(".action, .important").css('color', localStorage.getItem(".action, .important"));

//Color option function
$('.swatch').click(function selectColor(){
  //Store color as variable
  color = $('input[name=color]:checked', '.color').val().split(",");

  //Output stylesheet with options
  outString = '"custom.styles"{colors{Focus="' + color[0] + '"}};'

  //Set up download link
  $('#save').attr('href','data:text/plain;charset=utf-8;base64,' + btoa(outString));

  //Change website color
  $(".action, .important").css('color', color[1]);

  //Set chosen color as variable for localStorage
  accentColor = $(".action, .important").css('color');
  selectedColor = $('input[name=color]:checked');

  //Set localStorage based on chosen color
  localStorage.setItem(".action, .important", accentColor);
});
