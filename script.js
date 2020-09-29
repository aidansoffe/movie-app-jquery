
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
    console.log('should be array of obj',movies)

    $('#grab1 ,#grab2').val('');

    $('ul').empty()
    $.each(movies, function (index, val) {
      $.each(val, function (i, va) {

        $('ul').append(`<li>  ${va.name} - ${va.rating}  <span><i class='fa fa-trash'></i></span>`)
      })
    })
  });



    $('.sorting').change(function(){
      console.log('sorted')
      $.each(movies, function (i, v){
        v.sort(function (a, b) {
          return (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0); 
      });
      console.log("after:", movies)
      })
    })
    

});

// list delete button 
$('ul').on("click", "span", function () {
  $(this).parent().fadeOut(400, function () {
    $(this).remove();
  })
});


