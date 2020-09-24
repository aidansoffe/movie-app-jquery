
    var movies = [
]
    var lastAdded = -2
$(function() {
 
  $('button').click(function() {

    $('input[name^=tittle]').each(function(){
     
      movies.push($(this).val())
      lastAdded++
      $(this).val("")
    });

    $('ul').append('<li>' + movies[lastAdded]+ " - " + movies[lastAdded + 1] + "  <span><i class='fa fa-trash'></i></span>")
    
  });
console.log('movies>', movies)
});



$('ul').on("click", "span", function(){
  $(this).parent().fadeOut(300, function(){
    $(this).remove();
  })
})

// $(function(){
//   $('.sorting').on(click(function(){
//     $('ul').sort()
//   }))
// })

// points.sort(function(a, b){return a-b});

// movies.sort(function(a,b){ return a > b});

// movies = [{ name: "harry potter, rating: 5 }, {name: "Speed", rating: 3}]

// // movies sort by alphabetical
// movies.sort(function(a,b){
//   return a.name > b.name
// })

// // movies sort by rating
// movies.sort(function(a,b){
//   return a.rating > b.rating
// })