const API_KEY = 'fa48d4f9';
const filmsContainer = document.getElementById('films-container'); 
const loadMoreButton = document.getElementById('load-more');
let page = 1;

// Fonction pour récupérer les films de 2024 depuis l'API OMDb
async function fetchFilms() {
    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=2024&type=movie&page=${page}`);
        const data = await response.json();
        return data.Search || [];
    } catch (error) {
        console.error('Erreur lors de la récupération des films:', error);
        return [];
    }
}

// Fonction pour afficher les films dans le conteneur
function afficherFilms(films) {
    films.forEach(film => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.innerHTML = `
            <img src="${film.Poster}" alt="${film.Title}">
            <h3>${film.Title}</h3>
            <a href="movie.html?id=${film.imdbID}">En savoir plus</a>
        `;
        filmsContainer.appendChild(card);
    });
}

// Fonction pour charger les films initiaux ou les suivants
async function chargerFilms() {
    const films = await fetchFilms();
    afficherFilms(films);
}

// Événement pour charger plus de films lorsque le bouton est cliqué
loadMoreButton.addEventListener('click', () => {
    page++;
    chargerFilms();
});

// Charger les films initiaux
chargerFilms();


import './style.css'; 

