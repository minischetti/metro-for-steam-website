storedColor = localStorage.getItem("storedColor");
colorHex = localStorage.getItem("colorHex");

//Color site based on previously selected accent color
$(".action, .important").css('color', colorHex);

//Color each swatch based on value
$(".swatch").each(function (){
  this.style.backgroundColor = $(this).val().split(",")[1];
});

//Retrieve local storage and check in previously selected color
$('input[value="' + storedColor + '"]').prop( "checked", true );

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

  //Set localStorage based on chosen color
  localStorage.setItem("storedColor", color);
  localStorage.setItem("colorHex", color[1]);
});
