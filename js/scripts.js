//business logic//





var counter = function(input) {
  var inputArray = [];
  // var beepBoop = [0, 1]
  for (var i = 0; i <= input; i++) {
    inputArray.push(i);
  }

  for (var index = 0; index < inputArray.length; index += 1) {
    if ((index % 3) === 0){
    // inputArray[index] = " I'm sorry Dave, I'm afraid I can't do that";
    index = " I'm sorry Dave, I'm afraid I can't do that");
    } else if (index == beepBoop[0]) {
        // inputArray[i] = "Boop";
        output.push("Boop");
      } else if (index == beepBoop[1]) {
        // inputArray[i] = "Beep";
        output.push("Beep");
      } else {
        output.push(index);
      }
      console.log(output);
    };
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
