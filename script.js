
// array for storing 2 inputs
var movies=[]


// on submit click join 2 input values
// clear input values after each submition
// append new list with value to ul  

$(function () {

  $('.submit').click(function () {

    movies.push($('.movie-name').map(function () {
      return {
        name: $(this).val(),
        rating: $(this).next('.movie-rating').val()
      };
      
    }).get())  

    $('#grab1 ,#grab2').val('');
    
    display();
  });



//display to ul
function display(){
  $('ul').empty()
  $.each(movies, function (index, val) {
    $.each(val, function (i, va) {

      $('ul').append(`<li>  ${va.name} - ${va.rating}  <span><i class='fa fa-trash'></i></span>`)
    })
  })
}



//sorting from a-z
    $('.sorting').click(function(){
    movies.sort(function(a,b){
          // return (a.title - b.title) ? 1 : -1 
          return a[0].name.localeCompare(b[0].name)
      });
      display();
      })

    



});

// list delete button 
$('ul').on("click", "span", function () {
  $(this).parent().fadeOut(400, function () {
    $(this).remove();
  })
});


