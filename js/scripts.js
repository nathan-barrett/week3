//business logic//





var counter = function(input) {
  var inputArray = input.split();
  var beepBoop = [0, 1]
  var output = [];
  for (var i =1; i <= inputArray; i++) {
    for (var b=0; b < beepBoop.length; i++){
      debugger
      if ((i % 3) === 0){
        output.push(" I'm sorry Dave, I'm afraid I can't do that")
      } else if (inputArray[i] === beepBoop[0]) {
        output.push("Beep")
      } else if (inputArray[i] === beepBoop[1]) {
        output.push("Boop");
      } else {
        output.push(i);
      }
    }
    alert(output);
  };
};

//UI Logic//
$(document).ready(function(){
  $("form#count-form").submit(function(event){
    event.preventDefault();
    var countTo = $("input#count-to").val();
    counter(countTo);
  });
});
