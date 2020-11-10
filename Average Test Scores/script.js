// Prevent the Form From Submitting
function averageScores (event) {
  event.preventDefault();
// Gets Scores/Numbers Typed Into Each Form
  var scores = [document.getElementById("s1").value, document.getElementById("s2").value,
document.getElementById("s3").value, document.getElementById("s4").value, 
document.getElementById("s5").value]; 
// Finding The Average Sum Of All Test Scores Except Test #3 With Continue: 
  var sum = 0;
  for (var index = 0; index < 5; index++) {
    if (index === 2) {
    continue; 
    }
    var score = scores[index];
    sum = sum + parseInt(score);
  }
  var average = sum / 4;
  
  // Write Computation Without Test #3 To Paragraph Below: 
  var output = document.querySelector('.scoreoutput');
  output.textContent = average;
}

