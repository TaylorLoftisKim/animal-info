
$(document).ready(function() {
  $("form#animalForm").submit(function(event) {
debugger;
  var animalInput = $("#animalChoice").val();

  if (animalInput === "1") {
    $("#turtles").show();
  } else if (animalInput === "2") {
    $("#snakes").show();
  } else {
    $("#insects").show();
  }

  event.preventDefault();

  });
