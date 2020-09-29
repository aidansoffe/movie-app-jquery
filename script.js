
var movies = []

$(function () {

  $('.submit').click(function () {

    movies.push($('.movie-name').map(function () {
      return {
        name: $(this).val(),
        rating: $(this).next('.movie-rating').val()
      };
      
    }).get())
    $('#grab1 ,#grab2').val('');

    $('ul').empty()
    $.each(movies, function (index, val) {
      $.each(val, function (i, va) {

        $('ul').append(`<li>  ${va.name} - ${va.rating}  <span><i class='fa fa-trash'></i></span>`)
      })
    })
    console.log(movies)
  });
  
});


$('ul').on("click", "span", function () {
  $(this).parent().fadeOut(400, function () {
    $(this).remove();
  })
})


// $(function(){
//   $('.sorting').on(click(function(){
//     if(movies.name)
//     movies.sort(function(a,b){
//       return a.name > b.name
//     })
//   }))
// })

// // movies sort by alphabetical


// // movies sort by rating
// movies.sort(function(a,b){
//   return a.rating > b.rating
// })
