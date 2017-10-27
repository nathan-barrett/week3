//business logic//
var zero = /[0]/;
    one = /[1]/;
    oneZero = /[01]/;
var inputArray = [];


var numTest = function(input) {
  if ((parseInt(number) % 3 === 0) && (parseInt(number) !== 0)) {
    inputArray.push(" I'm sorry Dave, I'm afraid I can't do that");
  } else if (!oneZero.test(input)) {
    return number;
  } else if (!zeroRegex.test(number)) {
    return "Boop"
  } else if (!oneRegex.test(number)){
    return "Beep";
  } else {
    return "Beep-Boop"
  };
};

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
