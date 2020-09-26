
var movies = []

$(function() {

$('.submit').click(function() {

 movies.push($('.movie-name').map(function(){
 return {
   name: $(this).val(),
   rating: $(this).next('.movie-rating').val()
 };
}).get())
$.each(movies, function(index, val){
  $.each(val, function(i, va){
    console.log('name: ', va.name, 'rating: ', va.rating, 'movies:', movies)
    // $('ul')('<li>' + va.name + " - " + va.rating + "  <span><i class='fa fa-trash'></i></span>")
  })
  
    
  })
});



});




$('ul').on("click", "span", function(){
$(this).parent().fadeOut(500, function(){
$(this).remove();
})
})
// $(function(){
//   $('.sorting').on(click(function(){
//     $('ul').sort()
//   }))
// })

// // movies sort by alphabetical
// movies.sort(function(a,b){
//   return a.name > b.name
// })

// // movies sort by rating
// movies.sort(function(a,b){
//   return a.rating > b.rating
// })



// console.log(data)