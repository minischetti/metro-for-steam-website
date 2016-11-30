$('.color').click(function selectColor(){
  color = $('input[name=color]:checked', '.color').val();
  localStorage.setItem('accentColor',color);
  console.log(color);
});
