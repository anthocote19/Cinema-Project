import './style.css';
const API_KEY = 'votre_api_key';
const filmDetailsContainer = document.getElementById('film-details');
const filmTitle = document.getElementById('film-title'); 

function getFilmIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}


async function fetchFilmDetails(id) {
    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de la récupération des détails du film :', error);
        return null;
    }
}

// Fonction pour afficher les détails d'un film
function afficherFilmDetails(film) {
    if (!film || film.Response === 'False') {
        filmDetailsContainer.innerHTML = '<p>Les détails du film sont introuvables.</p>';
        return;
    }

    const dvdReleaseDate = film.DVD ? new Date(film.DVD).toLocaleDateString('fr-FR') : 'Non disponible';
    filmTitle.textContent = film.Title;

    filmDetailsContainer.innerHTML = `
        <img src="${film.Poster !== 'N/A' ? film.Poster : 'placeholder.jpg'}" alt="${film.Title}">
        <h2>${film.Title}</h2>
        <p><span class="highlight">Genre :</span> ${film.Genre}</p>
        <p><span class="highlight">Acteurs :</span> ${film.Actors}</p>
        <p><span class="highlight">Résumé :</span> ${film.Plot}</p>
        <p><span class="highlight">Notes :</span> ${film.imdbRating}/10</p>
        <p><span class="highlight">Date de sortie DVD :</span> ${dvdReleaseDate}</p>
    `;
}

// Initialisation de la page
async function init() {
    const filmId = getFilmIdFromURL();
    if (!filmId) {
        filmDetailsContainer.innerHTML = '<p>Film ID manquant dans l\'URL.</p>';
        return;
    }

    const filmDetails = await fetchFilmDetails(filmId);
    afficherFilmDetails(filmDetails);
}

// Charger les détails du film au chargement de la page
init();

