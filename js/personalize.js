//Global Variables
colorSwatch = "input[name=color]";
decalSwatch = "input[name=decal]";
fontSwatch = "input[name=font]";

//localStorage
webColor = localStorage.getItem("webColor");
webDecal = localStorage.getItem("webDecal");
webBackground = localStorage.getItem("webBackground");
webPosition = localStorage.getItem("webPosition");
webGrid = localStorage.getItem("webGrid");

//Color site based on previously selected accent color
$(".action, .important").css('color', webColor);
$(".background-image").css('background-image', webBackground);
$(".background-image").css('background-position', webPosition);

//Retrieve local storage and check in previously selected color
$('input[name=color][value*="' + webColor + '"]').prop( "checked", true );
$('input[name=decal][value*="' + webDecal + '"]').prop( "checked", true );
//$('input[name=grid][value*="' + webGrid + '"]').prop( "checked", true );

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

//Color option function
$(colorSwatch).click(function selectColor(){
  //Store color as variable
  color = $(colorSwatch + ':checked').val().split(",");
  //customColor = document.getElementById("picker").value;
  //$("#picker").attr("value", customColor);

  //Change website color
  $(".action, .important").css('color', color[1]);

  //Set localStorage based on chosen color
  localStorage.setItem("webColor", color[1]);
  localStorage.setItem("steamColor", color[0]);
  console.log(color[0]);
  //console.log(document.getElementById("picker").value);
});

//

//Decal option function
$(decalSwatch).click(function selectDecal(){

  //Store color as variable
  decal = $(decalSwatch + ':checked').val().split("|");
  $('.background-image').css('background-image', decal[2]);
  $('.background-image').css('background-position', decal[3]);

  //Set localStorage based on chosen decal
  localStorage.setItem("webDecal", decal[1]);
  localStorage.setItem("webBackground", decal[2]);
  localStorage.setItem("webPosition", decal[3]);
  localStorage.setItem("steamDecal", decal[0]);
  console.log(decal[0]);
});

//Grid option function
$("input[name=grid]").click(function() {
gridOptions = $('input[name=grid]:checked').map(function() {
  return this.value;
}).get().join().split("|");
});

//

$('#save').click(function exportStyle(){
  steamColor = localStorage.getItem("steamColor");
  steamDecal = localStorage.getItem("steamDecal");
  gridOptions = localStorage.getItem("gridOptions");
  //newMap = new Map(mapGrid);
//Create stylesheet
  outString = '"custom.styles"\n{\ncolors\n{\nFocus="' + steamColor + ' 255"\n}\nstyles\n{\nCSteamRootDialog\n{\nrender_bg\n{\n' + steamDecal + '\n}\n}\n' + gridOptions + '\n}'
  //Set up download link
  $('#save').attr('href','data:text/plain;charset=utf-8;base64,' + btoa(outString));
});
