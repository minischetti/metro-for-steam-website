//Global Variables
colorSwatch = "input[name=color]";
decalSwatch = "input[name=decal]";

//localStorage
storedColor = localStorage.getItem("storedColor");
colorHex = localStorage.getItem("colorHex");

storedDecal = localStorage.getItem("storedDecal");
decalBackground = localStorage.getItem("decalBackground");

//Color site based on previously selected accent color
$(".action, .important").css('color', colorHex);

//
//
//
//

//Color each swatch based on value
$(colorSwatch).each(function (){
  this.style.backgroundColor = $(this).val().split(",")[1];
});

//
//
//
//

//Retrieve local storage and check in previously selected color
$('input[name=color][value*="' + storedColor + '"]').prop( "checked", true );
$('input[name=decal][value*="' + storedDecal + '"]').prop( "checked", true );

//
//
//
//

//If localStorage is empty (nothing is selected), disable the save button
if (localStorage.getItem("storedColor") === null) {
  $('#save').addClass("disabled");
}

//
//
//
//

//Color option function
$(colorSwatch).click(function selectColor(){
  //Enable save button
  $('#save').removeClass("disabled");

  //Store color as variable
  color = $(colorSwatch + ':checked').val().split(",");

  //Change website color
  $(".action, .important").css('color', color[1]);

  //Set localStorage based on chosen color
  localStorage.setItem("storedColor", color[0]);
  localStorage.setItem("colorHex", color[1]);
  console.log(color);
});

//
//
//
//

//Set decal background images
$(decalSwatch).each(function (){
  this.style.backgroundImage = $(this).val().split("|")[1];
});

//Decal option function
$(decalSwatch).click(function selectDecal(){
  //Enable save button
  $('#save').removeClass("disabled");

  //Store color as variable
  decal = $(decalSwatch + ':checked').val().split("|");

  //Set localStorage based on chosen color
  localStorage.setItem("storedDecal", decal[1]);
  localStorage.setItem("decalBackground", decal[1]);
  console.log(decal);
});

//
//
//
//

//Create stylesheet
$(function exportStyle(){
  outString = '"custom.styles"\n{\ncolors\n{\nFocus="' + storedColor + '"\n}\n}'
  //Set up download link
  $('#save').attr('href','data:text/plain;charset=utf-8;base64,' + btoa(outString));
}
);
