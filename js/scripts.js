//business logic//
var zero = /[0]/;
    one = /[1]/;
    oneZero = /[01]/;
var inputArray = [];


var countToNumber = function(inputNumValue) {
  var countArray = [];
  for (i = 0; i <= inputNumValue; i++) {
    countArray.push(i.toString());
  }
  return countArray;
};

var numTest = function(input) {
  if ((parseInt(number) % 3 === 0) && (parseInt(number) !== 0)) {
    inputArray.push(" I'm sorry Dave, I'm afraid I can't do that");
  } else if (!oneZero.test(input)) {
    return input;
  } else if (!zero.test(number)) {
    return "Boop"
  } else if (!one.test(number)){
    return "Beep";
  } else {
    return "Beep-Boop"
  }
}
var output = function(userInput) {
  var inputArray = userInput.split("");
    return outputStringify(numTest(parseInt(userInput)));
  };

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
