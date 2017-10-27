//business logic//
var outputArray = [];
function counter(number) {
  for (var index = 0; index <= number; index++){
    var inputString = index.toString();
    if (inputString.includes("1") === true) {
      outputArray.push(" Boop!");
    } if (inputString.includes("0") === true) {
      outputArray.push(" Beep!")
    } else if (index % 3 === 0 && 0 < index) {
        outputArray.push(" I'm sorry Dave, I'm afraid I can't do that");
    } if ((inputString.includes("1") === false) && (inputString.includes("0") === false) && (index % 3 !== 0)) {
      outputArray.push(" " + index);
    }
  }
  return outputArray;
}
//UI Logic//
$(document).ready(function(){
  $("form#count-form").submit(function(event){
    event.preventDefault();
    var countTo = parseInt($("input#count-to").val());
    var results = counter(countTo);
    $("#results").empty();
    $("#Beep-Boop").text(outputArray).fadeIn();
    })
  });
