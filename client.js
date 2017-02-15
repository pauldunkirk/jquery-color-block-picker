$(document).ready(function(){
  var redColorBox = $('<div data-number="0" class="redColorBox"></div>');
  var blueColorBox = $('<div data-number="1" class="blueColorBox"></div>');
  var yellowColorBox = $('<div data-number="2" class="yellowColorBox"></div>');
  var greenColorBox = $('<div data-number="3" class="greenColorBox"></div>');
  var myColorArray = [redColorBox, blueColorBox, yellowColorBox, greenColorBox]
  $('body').append(myColorArray);
//above assigns a jquery object div to a var - below
  var randomBlock = randomNumber(0,3);
  function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
  }
  $('div').on('click', function(){
      $('#colorPlace').text("Your guess is ... bum bum bum..." + ($(this).data().number == randomBlock));
      $(this).css('background-color', 'black');
  });
});

// THIS WORKS - (but turns all clicked divs black - NOW GOING TO PUT IT IN IF ELSE
// $('div').on('click', function(){
//     $('#colorPlace').text("Your guess is ... bum bum bum..." + ($(this).data().number == randomBlock));
//     $(this).css('background-color', 'black');
// });
