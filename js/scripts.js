function Movie(trueOrFalse,time, age) {
  this.freshRelease = trueOrFalse;
  this.time = time;
  this.age = age;
}

Movie.prototype.price = function() {

  var ticketPrice = 10;
  if(this.time === '1'){
    ticketPrice -= 2;
  }else if(this.time == '3'){
    ticketPrice += 2;
  }
  if(this.age <= 12) {
    ticketPrice -= 3;
  }else if(this.age > 12 && this.age < 21) {
    ticketPrice -= 2;
  }
  if(this.freshRelease === "true") {
    ticketPrice +=3;
  }
  return ticketPrice;
}
function resetFields() {
    $("input#age").val("");
}

var validate = function(string) {
  return /^\d+$/.test(string);
};


// UI logic.
$(document).ready(function(){

  $("form").submit(function(event){
    event.preventDefault();

    var ageinput = $(this).find(".age").val();
    if (!validate(ageinput)){
      alert("Plese enter your age as a positive number.")
    }
    ageinput =  parseInt($(this).find(".age").val());

    var timeinput = $(this).find("select#times").val();

    var freshRelease = $(this).find("textarea").val();

    if (!validate(ageinput)){
      alert("Plese enter your age as a positive number.")
    }
    var NewMovie = new Movie(freshRelease,timeinput,ageinput);
    var ticketPrice = NewMovie.price();
    $(this).find('.price').text(ticketPrice);
  });

  resetFields();
});
