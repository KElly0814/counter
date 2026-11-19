var count = 0;
var countDisplay = $(".count");
var increaseCount = $("#add");
var resetCount = $("#res");
var decreaseCount = $("#sub");

increaseCount.on("click", function(){
  count++;
  countDisplay.text(count);
});

decreaseCount.on("click", function(){
  count--;
  countDisplay.text(count);
});

resetCount.on("click", function(){
  count = 0
countDisplay.text(count);
});