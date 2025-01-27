let currentPage = 1; 
const resultsPerPage = 5; 
let allResults = []; 
function search() {
    const query = document.getElementById("searchInput").value;
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    if (!query) {
        return;
    }

    fetch(`https://www.omdbapi.com/?apikey=fa48d4f9&s=${query}&page=${currentPage}`)
        .then(response => response.json())
        .then(data => {
            if (data.Search) {
                allResults = data.Search; 
                displayResults(allResults.slice(0, resultsPerPage)); 
            } else {
                resultsDiv.innerHTML = "Aucun résultat trouvé.";
            }
        })
        .catch(error => {
            resultsDiv.innerHTML = "Erreur lors de la recherche.";
        });
}

function displayResults(results) {
    const resultsDiv = document.getElementById("results");
    
    results.forEach(movie => {
        const movieDiv = document.createElement("div");
        movieDiv.classList.add("movie");

        movieDiv.innerHTML = `
            <img src="${movie.Poster}" alt="Poster de ${movie.Title}" class="movie-poster">
            <h3>${movie.Title}</h3>
            <a href="movie.html?id=${movie.imdbID}" class="movie-link">En savoir plus</a>
        `;
        resultsDiv.appendChild(movieDiv);
    });
}

function loadMoreResults() {
    currentPage++;
    const query = document.getElementById("searchInput").value;
    fetch(`https://www.omdbapi.com/?apikey=fa48d4f9&s=${query}&page=${currentPage}`)
        .then(response => response.json())
        .then(data => {
            if (data.Search) {
                displayResults(data.Search);
            }
        })
        .catch(error => {
            console.error("Erreur lors du chargement des résultats supplémentaires:", error);
        });
}
