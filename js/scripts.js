//business logic//

var Boop = /1/;
var Beep = /0/;
var output = [];

var counter = function(userInput) {
  for (var i =1; i <= userInput; i++) {
    output.push(i);
  }
  alert(output);

};

//UI Logic//
$(document).ready(function(){
  $("form#count-form").submit(function(event){
    event.preventDefault();
    var countTo = parseInt($("input#count-to").val());
    counter(countTo);
  });
});
