function Movie(trueOrFalse,time, age) {
  this.freshRelease = trueOrFalse;
  this.time = time;
  this.age = age;
}

Movie.prototype.price = function() {
  //console.log(this.time);
  //console.log(this.age);
  //console.log(this.freshRelease);
  var price = 10;
  if(this.time === 1){
    price -= 2;
  }else if(this.time === 3){
    price += 2;
  }
  if(this.age <= 12) {
    price -= 3;
  }else if(this.age > 12 && this.age < 21) {
    price -= 2;
  }
  if(this.freshRelease) {
    price +=3;
  }
  return price;
}
function resetFields() {
    $("input#age").val("");
}


// UI logic.
$(document).ready(function(){

  $("form").submit(function(event){
    event.preventDefault();
    console.log("hello");

    var ageinput =  parseInt($(this).find(".age").val());
    console.log(ageinput);
    var timeinput = $(this).find("select#times").val();
    console.log(timeinput);
    var freshRelease = $(this).find("textarea").val();
    console.log(freshRelease);

    var NewMovie = new Movie(freshRelease,ageinput, timeinput);
    var ticketPrice = NewMovie.price();
    console.log(ticketPrice);
    $(this).find('.price').text(ticketPrice);
  });
});
