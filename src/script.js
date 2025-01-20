const loadMoreFilmsButton = document.getElementById("loadMoreFilms");
loadMoreFilmsButton.addEventListener("click", () => {
    const moreFilms = [
        {
            poster: "./images/film2024_1.jpg",
            name: "Film 2024 A",
            resume: "Résumé du film 2024 A.",
            link: "./movie.html"
        },
        {
            poster: "./images/film2024_2.jpg",
            name: "Film 2024 B",
            resume: "Résumé du film 2024 B.",
            link: "./movie.html"
        }
    ];

    const carousel = document.querySelector(".carousel");
    moreFilms.forEach(film => {
        const filmDiv = document.createElement("div");
        filmDiv.className = "carousel-item";
        filmDiv.innerHTML = `
            <img src="${film.poster}" alt="${film.name}">
            <div class="movie-info">
                <h5>${film.name}</h5>
                <p>${film.resume}</p>
                <a href="${film.link}">En savoir plus</a>
            </div>
        `;
        carousel.appendChild(filmDiv);
    });
});
