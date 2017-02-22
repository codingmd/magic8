function answer(){

  document.getElementById("question").value = "";

  var random = Math.floor(Math.random() * 4);
  if (random===0){
    document.getElementById("answer_field").innerHTML = "Yes";
  } else if(random===1) {
    document.getElementById("answer_field").innerHTML = "No";
  } else if (random===2) {
    document.getElementById("answer_field").innerHTML = "Maybe you should ask Google?";
  } else if (random===3) {

    document.getElementById("answer_field").innerHTML = "I am entirely sure";
  }
}
