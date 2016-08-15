// var groceryList = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9', 'item10'];
//
// var alphabetized = []
//
// $('#groceryList form').submit(function(event) {
//   event.preventDefault();
//
//   groceryList.forEach(function(grocery) {
//     var userInput = $('input#' + grocery).val();
//     grocery.toUpperCase();
//     alphabetized =
//     $('.' + grocery).append(userInput);
//   });
//
//   console.log(groceryList);
//   $('#groceryList').hide();
//   $('#list').slideToggle(6000);
// });


$('#groceryList form').submit(function(event) {
  event.preventDefault();
  var groceryList = [($("input#item1").val()),($("input#item2").val()),($("input#item3").val()),($("input#item4").val()),($("input#item5").val()),($("input#item6").val()),($("input#item7").val()),($("input#item8").val()),($("input#item9").val()),($("input#item10").val())]

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
