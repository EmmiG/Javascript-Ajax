fetchMovies(); /* hämta alla 20 filmerna som finns i databasen tog ej alla*/
    

let globalMovieList = []; /* Denna är en tom array ifall att vi vill söka direkt efter en film när vi kommer till sidan men den har laddat klart helt då den har hämtat(fetch) datan från databasen */

function fetchMovies() {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=860b293ae4ca0964c234574ddb43b408&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1') /* denna API kommer hämta alla filmer från databasen, inskrivit med min API nyckel */
        .then(function (response) { /* kommer skicka med json här var beredd på att ta emot json*/
            return response.json()
        })
        .then(function (movies) { /* Sedan gör vi en funktion som skickar med alla filmer */
            globalMovieList = movies.results; /* skriver ut alla filmer på sidan */
            displayMovies(movies); /* är kopplad till funktionen displayMovies och skickar med att den ska visa alla filmerna på sidan */
        })
        .catch(function (error) { /* Man ska alltid ha en catch som tar emot alla error som eventuellt kan dyka upp */
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

    
        //` ` talar om att allt ska ligga i en sträng med variabler och - kan bytas ut till vad som och räknas som en valfri text 
        /* Använde variabeln movie och kan nu skriva ut Orginal Titel, Fakta om respektive film, vilken plats filmen har totalt , Rankning från 1 -10 ......... i console.log*/
        // använder mig av variabeln url för att kunna skriva ut själva bilden från databasen på webbsidan  
        htmlBlock += ` 

        <img src="${url}"></img> 

      <p> <span style='color:#21d1ae;'>${movie.original_title} </span> : <br /> ${movie.overview} <br /> <br /> Ranking of all movies: <span style='color:#5a6dff;'>${movie.vote_count} </span> <br /> Ranking this movie 1-10: <span style='color:#49b5d6;'>${movie.vote_average} </span></p>
 
   
      `;

    }

    ul.innerHTML = htmlBlock; /* Jag använder mig av variabeln ul som jag skapade på rad 17 för att hämta dokumentet *movieList* som jag har i min index.html fil, resultatet blir att de skrivs ut alla filmer från servern då jag hade en console.log(movieList); i min main.js fil förut. */
}



/* en listener som kommer att aktiveras när användaren skriver in en titel i *movieInput* fältet*/
movieInput.addEventListener('keyup', function () { /* använder sig av input i htmlen som har ett unikt id =  *movieInput* , Keyup, när man väl trycker på tagentbokstäverna på tagentbordet*/
    let htmlBlock = ''; /* en variabel som indekerar på en tom sträng och en användare kan skriva in valfri text */

    /* Loopa igenom varje film, söker igenom alla filmer */

    for (let movie of globalMovieList) {

        let backDrop = ''; /* skapade en variabel vid namn *backDrop*, denna behövs för att kunna få bilderna att funka på webbsidan */
        let url = `https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`; /* länken fram till p = base_url, w300 = size och använder backdrop_path är själva namnet på bilden i The Movie Db´s databas, så att jag kan hämta bilden från databasen istället för att jag hittar bilden på min egen dator */

        /*  Om(if) den hittar orginal filmen av texten som användaren har skrivit in i inputfältet och den är över detta värde : läggs den till i htmlen som sedan kommer den att bifogas till Dom  och skriva ut dens värde */
        
        if (movie.original_title.includes(movieInput.value)) {
            htmlBlock += `

          <img src="${url}"></img> 

    <p><span style='color:#21d1ae;'>${movie.original_title} </span> - ${movie.overview} - <span style='color:#5a6dff;'>${movie.vote_count} </span> - <span style='color:#07e2ff;'>${movie.vote_average} </span></p>

  

`;
        }
    }

    /* När vi har gått igenom alla filmer */

    ul.innerHTML = htmlBlock; /* lägg till i HTMLen inuti diven  i htmlen */
})



var showMovie = document.getElementById('searchMovie'); /* variabeln *showMovie* , som hämtas från index filen */



showMovie.onclick = function () { /* använder mig av variabeln *showMovie*, onclick betyder att när man klickar på det som man har skrivit in, så kommer det hända något och då använder man sig av en funktion som talar om vad som ska hända, i detta fall när användaren har skrivit in text i inputfältet där man skrivit vilken film man vill ha mer information om och klickar på en knapp så ska man se Orginal titel, fakta om filmen, rankningen på respektive film samt vilken rankning mellan 1-10 den filmen har, finns i min displayMovies funktion*/

   
    fetchMovies(); /* hämta alla 20 filmerna som finns i databasen tog ej alla med funktionen att man ha tryckt på knappen, den console.log(fetchMovies) att det är en knapp. När man har börjat skriva dom första bokstäverna(börja med stor bokstav) på filmen som man söker kommer då filmen upp automatiskt och då behöver man enbart trycka på enter knappen på tagentbordet */

}
