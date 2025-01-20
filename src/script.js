$(document).ready(function() {
    $('.carousel').carousel({
        fullWidth: true,
        indicators: true
    });
});

const movies = [
    { id: "tt0848228", title: "Avengers", description: "Les héros les plus puissants de la Terre s'unissent pour sauver le monde.", poster: "./images/Avengers.jpg" },
    { id: "tt2015381", title: "Guardians of the Galaxy", description: "Un groupe de marginaux doit sauver la galaxie.", poster: "./images/Guardians.jpg" },
    { id: "tt0120338", title: "Titanic", description: "Un amour interdit naît à bord du célèbre paquebot.", poster: "./images/Titanic.jpg" },
    { id: "tt0910970", title: "Wall-E", description: "Un robot solitaire découvre l'amour et sauve l'humanité.", poster: "./images/wall-e.jpg" },
    { id: "tt0317219", title: "Cars", description: "Une voiture apprend que la victoire n'est pas tout dans la vie.", poster: "./images/Cars.jpg" }
];

const carousel = document.querySelector('.carousel');
movies.forEach(movie => {
    const carouselItem = `
        <div class="carousel-item">
            <img src="${movie.poster}" alt="${movie.title}">
            <div class="movie-info">
                <h5>${movie.title}</h5>
                <p>${movie.description}</p>
                <button class="add-to-list" data-id="${movie.id}" data-title="${movie.title}" data-poster="${movie.poster}"><i class="fa-solid fa-plus"></i> Ma Liste</button>
            </div>
        </div>
    `;
    carousel.innerHTML += carouselItem;
});

document.addEventListener('click', (e) => {
    if (e.target.closest('.add-to-list')) {
        const button = e.target.closest('.add-to-list');
        const movie = {
            id: button.dataset.id,
            title: button.dataset.title,
            poster: button.dataset.poster
        };
        let myList = JSON.parse(localStorage.getItem('myList')) || [];
        if (!myList.find(item => item.id === movie.id)) {
            myList.push(movie);
            localStorage.setItem('myList', JSON.stringify(myList));
        }
    }
});


