fetchMovies();
function fetchMovies(){
  fetch('https://api.themoviedb.org/3/discover/movie?api_key=860b293ae4ca0964c234574ddb43b408&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
    .then(function(response) {
      return response.json()
    })
    .then(function(movies) {
      console.log(movies);
      displayMovies(movies);
    })
    .catch(function(error) {
      console.log(error);
    });
}




function displayMovies(movies) {
  
  let htmlBlock = ''; /* en variabel som indekerar på en tom sträng och en användare kan skriva in valfri text*/
 for (const movie of movies.results) {
     let orginalTitle = ''; /* skapade en variabel vid namn *orginalTitle* */
     let overView = ''; /* skapade en variabel vid namn *overView* */
     let voteCount = ''; /* skapade en variabel vid namn *voteCount* */
     let voteAverage = ''; /* skapade en variabel vid namn *voteAverage* */
     let backDrop = ''; /* skapade en variabel vid namn *backDrop* */
     let url = `https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`; /* länken fram till p = base_url w300 = size och använder backdrop_path är själva namnet på bilden i The Movie Db´s databas, så att jag kan hämta bilden från databasen istället för att jag hittar bilden på min egen dator */
     
     console.log(movie.vote_average);
     //` ` talar om att allt ska ligga i en sträng med variabler och - kan bytas ut till vad som och räknas som en valfri text 
     /* Använde variabeln movie och kan nu skriva ut Orginal Titel, Fakta om respektive film, vilken plats filmen har , Rankning från 1 -10 ......... i console.log*/
      
    htmlBlock += ` 
      <p> ${movie.original_title} - ${movie.overview} - ${movie.vote_count} - ${movie.vote_average}</p>

         <img src="${url}"></img> 



   
      `;
          
  }

  document.body.innerHTML = htmlBlock;
}

/*  använda sedan kanske men göra om dom en del
 - ${movie.rating} - <span id='genColor' style='background-color:red;'>${movie.genres} </span> - ${likeMovie}</p> */
