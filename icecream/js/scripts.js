
var iceCreamy = ['pistachio', 'mint-chocolate-chip', 'coffee', 'rocky-road', 'cookies-n-cream', 'vanilla', 'peanut-butter', 'chocolate', 'cake-batter', 'moosetracks', 'fudge-swirl', 'black-cherry', 'strawberry', 'banana', 'cookie-dough', 'blueberries-n-cream']
var iceCreams = iceCreamy.sort();

iceCreams.forEach(function(iceCream) {
  $('.iceCream').append("<li>" + iceCream + "</li>");
  // console.log(iceCreams);
});


$(".body").hide(6000);
$(".body").show(6000);
