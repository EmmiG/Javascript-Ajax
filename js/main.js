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

let div = document.getElementById('movieBox'); 
let ul = document.getElementById('movieList'); 


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
   
  document.div.innerHTML = htmlBlock;
}

/* NYTT IGEN*/
function movieText() {
    var item = document.getElementById("MovieInput").value /* variabeln *item* innehåller dokument elementet med id *MovieInput* som hämtas från index filen, skapar en ruta där man kan skriva inuti  */
    var text = document.createTextNode(item) /* variabeln *text*, skapar textnod som vidareförmedlar data , den hämtar variabeln *item* , är till för att användaren ska kunna skriva in valfri text i *todoInput* fältet */
    var movieList = document.getElementById("movieList"); /* variabeln *todoList* innehåller dokument elementet med id *todoList*, ul som hämtas från index filen, för att kunna lägga till element på ul*/
    var newItem = document.createElement("li") /* variabeln *newItem* innehåller dokument elementet li , skapar li element som kan läggas till som hämtas från index filen */

    newItem.appendChild(text) /* hämtar variabeln *newItem*, lägger till text i *todoInput* fältet med hjälp av variablen *text* vi skapa tidigare, när man väl har skrivit in något i *todoInput* så kommer den texten att skrivas ut*/

    document.getElementById("movieList").appendChild(newItem) /* hämtar elementet med id *todolist* från indexen , appendchild lägger till ett nytt "barn" , vi använder oss av variabeln *newItem* för att kunna gå in i ul elementet så att texten vi skriver kommer hamna som en lista  */
    console.log(movieList)  
    
    
}

/* NYTT IGEN slut*/
    
    
   
    
    
    /* istället för att säga om den i indexen gör man det här */

   
    var searchMovieButton = document.getElementById('searchMovie');
    
    searchMovieButton.onclick = function(){
    searchMovieButton();
        
    
    }   
 

    
    /* gör man det här slut */


/*  använda sedan kanske men göra om dom en del
 - ${movie.rating} - <span id='genColor' style='background-color:red;'>${movie.genres} </span> - ${likeMovie}</p> */
