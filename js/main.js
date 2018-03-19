fetchMovies();
function fetchMovies(){
  fetch('https://api.themoviedb.org/3/discover/movie?api_key=860b293ae4ca0964c234574ddb43b408&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')     /* denna API kommer hämta alla filmer från databasen, inskrivit med min API nyckel */
    .then(function(response) { /* kommer skicka med json här var beredd på att ta emot json*/
      return response.json()
    })
    .then(function(movies) { /* Sedan gör vi en function som skickar med alla filmer */
      console.log(movies); /* skriver ut alla filmer på sidan*/
      displayMovies(movies); /* är kopplad till funktionen displayMovies och skickar med att den ska visa alla filmerna på sidan */
    })
    .catch(function(error) { /* Man ska alltid ha en catch som tar emot alla error som eventuellt kan dyka upp */
      console.log(error); /* skriver ut alla error meddelanden på sidan*/
    });
}

let div = document.getElementById('movieBox'); /* skapar variabeln *div* , hämtar elementet med id *movieBox* från indexen*/
let ul = document.getElementById('movieList'); /* skapar variabeln *ul* , hämtar elementet med id *movieList* från indexen*/


function displayMovies(movies) { /* visar upp all filmer som finns i API databasen och här tar jag upp exakt vilka värden jag vill visa upp */
    
   
    
     
  
  let htmlBlock = ''; /* en variabel som indekerar på en tom sträng och en användare kan skriva in valfri text */
 for (const movie of movies.results) { /* skapar en variabel som man inte kan ändra på , som finns hela tiden och loopar ut/skriver ut alla filmer som finns, results är den jag skulle gå in i enligt min API för att den är arrayen för att kunna hitta filmerna */
     

     let orginalTitle = ''; /* skapade en variabel vid namn *orginalTitle*, får upp orginaltiteln på filmen */
     let overView = ''; /* skapade en variabel vid namn *overView*, får upp fakta om respektive film */
     let voteCount = ''; /* skapade en variabel vid namn *voteCount*, tar upp vilken rankningen den har av alla filmer som finns på databasen */
     let voteAverage = ''; /* skapade en variabel vid namn *voteAverage*, får upp vilken ranknig filmen har från 1-10 */
     let backDrop = ''; /* skapade en variabel vid namn *backDrop*, denna behövs för att kunna få bilderna att funka på webbsidan */
     let url = `https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`; /* länken fram till p = base_url, w300 = size och använder backdrop_path är själva namnet på bilden i The Movie Db´s databas, så att jag kan hämta bilden från databasen istället för att jag hittar bilden på min egen dator */
     
     //console.log(movie.vote_average); /* om jag okommenterar denna så kommer den att skriva ut vilken rankning mellan 1-10 som filmen har */
     //` ` talar om att allt ska ligga i en sträng med variabler och - kan bytas ut till vad som och räknas som en valfri text 
     /* Använde variabeln movie och kan nu skriva ut Orginal Titel, Fakta om respektive film, vilken plats filmen har totalt , Rankning från 1 -10 ......... i console.log*/
     // använder mig av variabeln url för att kunna skriva ut själva bilden från databasen på webbsidan  
    htmlBlock += ` 
      <p> ${movie.original_title} - ${movie.overview} - ${movie.vote_count} - ${movie.vote_average}</p>

         <img src="${url}"></img> 



   
      `;
          
  } 
   
  ul.innerHTML = htmlBlock; /* Jag använder mig av variabeln ul som jag skapade på rad 17 för att hämta dokumentet movieList som jag har i min index.html fil, resultatet blir att de skrivs ut alla filmer från servern då jag hade en console.log(movieList); i min main.js fil förut. */
}


function movieText() {
    var item = document.getElementById("movieInput").value /* variabeln *item* innehåller dokument elementet med id *movieInput* som hämtas från index filen, skapar en ruta där man kan skriva inuti  */
    var text = document.createTextNode(item) /* variabeln *text*, skapar textnod som vidareförmedlar data , den hämtar variabeln *item* , är till för att användaren ska kunna skriva in valfri text i *movieInput* fältet */
    var movieList = document.getElementById("movieList"); /* variabeln *movieList* innehåller dokument elementet med id *movieList*, ul som hämtas från index filen, för att kunna skriva in vilken film du vill söka efter */
    var newItem = document.createElement("li") /* variabeln *newItem* innehåller dokument elementet li , skapar li element som kan läggas till som hämtas från index filen */

    newItem.appendChild(text) /* hämtar variabeln *newItem*, lägger till text i *movieInput* fältet med hjälp av variablen *text* vi skapa tidigare, när man väl har skrivit in något i *movieInput* så kommer den texten att skrivas ut */

    document.getElementById("movieList")/* hämtar elementet med id *movielist* från indexen */
    console.log(movieList)  
    
    
}

/* NYTT*/


    var showMovie = document.getElementById('searchMovie'); /* variabeln *showMovie* , som hämtas från index filen */
    
   

    showMovie.onclick = function () { /* använder mig av variabeln *showMovie*, onclick betyder att när man klickar på det som man har skrivit in, så kommer det hända något och då använder man sig av en funktion som talar om vad som ska hända, i detta fall när man skrivit in text i inputfältetdär man skrivit vilken film man vill ha mer information om och klickar på en knapp så ska man se Orginal titel, fakta om filmen, rankningen på respektive film samt vilken rankning mellan 1-10 den filmen har, finns i min displayMovies funktion*/
        
         

    
        
      fetchMovies();  /* försökte här hämta alla filmerna som finns i databasen */
        
          


    }




/* NYTT SLUT */
    
    
   
    
    
    /* istället för att säga om den i indexen gör man det här */

   
    //var searchMovieButton = document.getElementById('searchMovie');
    
    //searchMovieButton.onclick = function(){
    //searchMovieButton();
        
    
    //}  // 
 

    
    /* gör man det här slut */


/*  använda sedan kanske men göra om dom en del
 - ${movie.rating} - <span id='genColor' style='background-color:red;'>${movie.genres} </span> - ${likeMovie}</p> */
