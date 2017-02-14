$(document).ready(function(){
  console.log('hi');
  var notAButton = $('<div id="notaButton">'); //changed to just a div
  notAButton.text('Click on a color until you find the one I\'m thinking of.  It will change each time you refresh the page');
  $('#buttonPlace').append(notAButton);

    var redColorBox = $('<div data-number="0" class="redColorBox"></div>');
    var blueColorBox = $('<div data-number="1" class="blueColorBox"></div>');
    var yellowColorBox = $('<div data-number="2" class="yellowColorBox"></div>');
    var greenColorBox = $('<div data-number="3" class="greenColorBox"></div>');

    $('body').append(redColorBox, blueColorBox, yellowColorBox, greenColorBox);
    var randomBlock = randomNumber(0,3);

    // $('div').on('click', function(){  THIS WORKS BUT GOING TO PUT IT IN IF ELSE
    //     console.log($(this).data());
    //     console.log($(this).data().number == randomBlock);
    //     $('#colorPlace').text("Your guess is ... bum bum bum..." + ($(this).data().number == randomBlock));
    //   });

      $('div').on('click', function(){
          console.log($(this).data());
          console.log($(this).data().number == randomBlock);
          $('#colorPlace').text("Your guess is ... bum bum bum..." + ($(this).data().number == randomBlock));
        });




    function randomNumber(min, max){
        return Math.floor(Math.random() * (1 + max - min) + min);
    }
  //});

  // for (var i = 0; i < 10; i++) {
  //   var newButton = $('<button>'); //creating it so include angle brackets - jquery doesnt need closing brackets
  //   newButton.text('click me I am a button');
  //   newButton.data('idNumber', i); // idNumber is 1, changing to i - ids are common but often not displayed on page- .data stores
  //   newButton.data('cool secret', 'Kris has big ears'); // first is key, second is value
  //   newButton.data('cool secret', 'other cool secret'); // this one overrides the first
  //   $('body').append(newButton);
  // }
  //


  // console.log($(this).data());
  // console.log($(this).data().idNumber + 'button was clicked!'); //idNumber is value?
});
