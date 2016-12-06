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

//If localStorage is empty (nothing is selected), disable the save button
if (localStorage.getItem("storedColor") === null) {
  $('#save').addClass("disabled");
}

//Color option function
$('.swatch').click(function selectColor(){
  //Enable save button
  $('#save').removeClass("disabled");

  //Store color as variable
  color = $('input[name=color]:checked', '.color').val().split(",");

  //Change website color
  $(".action, .important").css('color', color[1]);

  //Set localStorage based on chosen color
  localStorage.setItem("storedColor", color);
  localStorage.setItem("colorHex", color[1]);
});

//Create stylesheet
$(function exportStyle(){
  outString = '"custom.styles"{colors{Focus="' + storedColor + '"}};'
  //Set up download link
  $('#save').attr('href','data:text/plain;charset=utf-8;base64,' + btoa(outString));
}
);
