$("#form").submit(function(event) {
  event.preventDefault();

  var yourName = $("input#name").val();
  var favArray = [($("input#favColor").val()), ($("input#favSeason").val()), ($("input#favFood").val()), ($("input#favMusic").val()), ($("input#favAnimal").val())];

  console.log(favArray);
  var cloneArray = [favArray[ 1] , favArray[ 0] , favArray[ 2]];
  var newArray = [];

  Array.prototype.push.apply(newArray, favArray);
  Array.prototype.push.apply(newArray, cloneArray);
  console.log(newArray);

  $('#0').append(newArray[0])
  $('#1').append(newArray[1])
  $('#2').append(newArray[2])
  $('#3').append(newArray[3])
  $('#4').append(newArray[4])
  $('#5').append(newArray[5])
  $('#6').append(newArray[6])
  $('#7').append(newArray[7])

})
