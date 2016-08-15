
$('#groceryList form').submit(function(event) {
  event.preventDefault();
  var groceryList = [
    ($("input#item1").val()),
    ($("input#item2").val()),
    ($("input#item3").val()),
    ($("input#item4").val()),
    ($("input#item5").val()),
    ($("input#item6").val()),
    ($("input#item7").val()),
    ($("input#item8").val()),
    ($("input#item9").val()),
    ($("input#item10").val())]

  var alphabetized = groceryList.sort();

  alphabetized.forEach(function(item) {
  var Cap = item.toUpperCase();
    $('.item').append('<li>' + Cap + '</li>')
    $('#groceryList').hide();
    $('#list').show();
  })
console.log(groceryList);
console.log(alphabetized);
})
