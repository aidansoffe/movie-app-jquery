
// array for storing 2 inputs
var movies = []


// on submit click join 2 input values
// clear input values after each submition
// append new list with value to ul  

$(function () {

  $('.submit').click(function () {
    var value = $(".movie-name").val();
    var nextVal = $(".movie-name").next(".movie-rating").val()
    if ( value.length > 2 && nextVal > 0 &&  nextVal <= 10){
      movies.push(
      
        $(".movie-name")
          .map(function () {
            return {
              name: value,
              rating: nextVal,
            };
          })
          .get()
      );
    }
    

    $("#grab1 ,#grab2").val("");

    // NOTE: you *also* need to do sorting inside this function
    // sortMovies();  //tbh i didnt understand this part, why shoould we insert sortMovies() because its working without it )) ?
    display();
  });


 

});

// when sort button is clicked
  $('#sorting').change(function () {
   sortMovies();
   display();

 })
 

// separate function to sort movies
function sortMovies() {
  if ($('#sorting').val() === 'a-z') {
    movies.sort(function (a, b) {
      return a[0].name.localeCompare(b[0].name)
    });
  }else if ($('#sorting').val() === 'z-a'){
    movies.sort(function (a, b) {
      return b[0].name.localeCompare(a[0].name)
    });
  } else if($('#sorting').val() === '0-10'){
    movies.sort(function (a, b) {
      return a[0].rating.localeCompare(b[0].rating)
    });
  } else if($('#sorting').val() === '10-0'){
    movies.sort(function (a, b) {
      return b[0].rating.localeCompare(a[0].rating)
    });
  };
}


//display to ul
function display() {
  $('#movie-list').empty()
  $.each(movies, function (index, val) {
    $.each(val, function (i, va) {
      $('#movie-list').append(`<li>  ${va.name} - ${va.rating}  <span><i class='fa fa-trash'></i></span>`)
    })
  })
}




// list delete button 
$('ul').on("click", "span", function () {
  $(this).parent().fadeOut(400, function () {
    $(this).remove();
  })
});


