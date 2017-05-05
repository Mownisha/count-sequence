$(document).ready(function() {
  $("#blanks").submit(function(event) {
    event.preventDefault();

    var totalNumber = [];
    var num1Input = parseInt($("#num1").val());
    var num2Input = parseInt($("#num2").val());
    if( num1Input && num2Input)
    {
      if((num1Input > 0 && num2Input > 0) && (num1Input > num2Input))
      {
        for (var index = num2Input; index <= num1Input; index += num2Input)
        {
          totalNumber.push(index);
        }
        $("p").text(totalNumber);
      }
      else
      {
        alert("Error : negative number or count by number is larger than the count to numbers");

      }
    }
    else
    {
      alert("Please enter all information")
    }
  });
});
