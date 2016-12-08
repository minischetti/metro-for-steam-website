//Global Variables
colorSwatch = "input[name=color]";
decalSwatch = "input[name=decal]";
fontSwatch = "input[name=font]";

//localStorage
webColor = localStorage.getItem("webColor");
webDecal = localStorage.getItem("webDecal");

//Color site based on previously selected accent color
$(".action, .important").css('color', webColor);

//
//
//
//

//Color each swatch based on value
$(colorSwatch).each(function (){
  this.style.backgroundColor = $(this).val().split(",")[1];
});

//Set decal background images
$(decalSwatch).each(function (){
  this.style.backgroundImage = $(this).val().split("|")[1];
});

//
//
//
//

//Retrieve local storage and check in previously selected color
$('input[name=color][value*="' + webColor + '"]').prop( "checked", true );
$('input[name=decal][value*="' + webDecal + '"]').prop( "checked", true );

//
//
//
//

//If localStorage is empty (nothing is selected), disable the save button
if (localStorage.getItem("steamColor") === null) {
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
  steamColor = color[0];

  //Change website color
  $(".action, .important").css('color', color[1]);

  //Set localStorage based on chosen color
  localStorage.setItem("webColor", color[1]);
  console.log(color[0]);
  console.log(steamColor);
});
//
//
//
//

//Decal option function
$(decalSwatch).click(function selectDecal(){
  //Enable save button
  $('#save').removeClass("disabled");

  //Store color as variable
  decal = $(decalSwatch + ':checked').val().split("|");
  steamDecal = decal[0];

  //Set localStorage based on chosen decal
  localStorage.setItem("webDecal", decal[1]);
  console.log(decal[0]);
});

//
//
//
//

//Create stylesheet
$(function exportStyle(){
  outString = '"custom.styles"\n{\ncolors\n{\nFocus="' + steamColor + ' 255"\n}\nstyles\n{\nCSteamRootDialog\n{\nrender_bg\n{\n' + steamDecal + '\n}\n}\n}\n}'
  //Set up download link
  $('#save').attr('href','data:text/plain;charset=utf-8;base64,' + btoa(outString));
}
);
