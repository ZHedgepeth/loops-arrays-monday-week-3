
$("#form").submit(function(event) {
  event.preventDefault();

  var sentence = $("input#sentence").val();
  var sentenceArray = sentence.split(" ");
  console.log(sentenceArray);
  var newArray = [];

  sentenceArray.forEach(function(word) {
    if (word.length >= 3) {
      newArray.push(word);
    }
  });

  newArray.reverse();
  console.log(newArray);

  var newSentence = newArray.join(" | ");

  $(".result").text(newSentence);
})
