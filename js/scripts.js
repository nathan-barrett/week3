//business logic//
var inputArray = [];
var counter = function(input) {
    for (var i = 0; i <=input; i++) {
      inputArray.push(i);
      console.log(inputArray);
    }
    for (var arrayIndex = 0; arrayIndex < inputArray; arrayIndex ++) {
      } if (inputArray[arrayIndex] == 0) {
        inputArray[arrayIndex] = "Beep";
      } else if (inputArray[arrayIndex] == 1) {
        inputArray[arrayIndex] = "Boop";
      } else if ((inputArray[arrayIndex] % 3) === 0){
        inputArray[arrayIndex] = " I'm sorry Dave, I'm afraid I can't do that";
    }
    return inputArray;
    console.log(inputArray);
  }

//UI Logic//
$(document).ready(function(){
  $("form#count-form").submit(function(event){
    event.preventDefault();
    var countTo = parseInt($("input#count-to").val());
    var result = counter(countTo);
    alert(result);
  });
});
