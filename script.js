
    var movies = [];
    var obj = {}
 
  $('.submit').click(function() {
   
  $('.grab').each(function() {
    var titles =  $(this).attr('title')
    var ratings =  $(this).attr('rating')
    console.log('----> title', titles)
    console.log('---rating', ratings)
//  obj[$(elem).val()] = $(elem).val()
 movies.push({titles, ratings})
   console.log('-----> obj', movies)
  })

})

    // $('ul').append('<li>' + $(this).title + " - " + $(this).rating + "  <span><i class='fa fa-trash'></i></span>")
  



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

// // movies sort by alphabetical
// movies.sort(function(a,b){
//   return a.name > b.name
// })

// // movies sort by rating
// movies.sort(function(a,b){
//   return a.rating > b.rating
// })



// console.log(data)