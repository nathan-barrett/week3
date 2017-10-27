//business logic//
var zero = /[0]/;
    one = /[1]/;
    oneZero = /[01]/;
var inputArray = [];

//function to create an array of strings of the numbers counting up to userInput//
var counter = function(inputNumValue) {
  var userArray = [];
  for (index = 1; index <= inputNumValue; index++) {
    userArray.push(index.toString());
  }
  return userArray;
};
//function to search for regex and change 1 and 0 to Boop/Beep and numbers divided by 3//
var numTest = function(input) {
  if ((parseInt(input) % 3 === 0) && (parseInt(input) !== 0)) {
    return " I'm sorry Dave, I'm afraid I can't do that"
  } else if (!oneZero.test(input)) {
    return input;
  } else if (!zero.test(input)) {
    return "Boop"
  } else if (!one.test(input)){
    return "Beep";
  } else {
    return "Beep-Boop"
  }
}
// funcation to copy an array and run the numTest function on it//
var outputToString = function(numArray) {
  var outputString = numArray.map(function(number) {
    return numTest(number);
  });
  return outputString.join(", ");
};
//function to put all of the functions together to get the final output//
var finalOutput = function(userInput) {
  var inputArray = userInput.split("");
    return outputToString(counter(parseInt(userInput)));
  };

//UI Logic//
$(document).ready(function(){
  $("form#count-form").submit(function(event){
    event.preventDefault();
    var countTo = $("input#count-to").val();
    var results = finalOutput(countTo);
    $("#Beep-Boop").empty();
    resultArray = results.split();
    resultArray.forEach(function(result){
      $("#Beep-Boop").text(resultArray);
    })
  });
});
