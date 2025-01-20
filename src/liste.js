const movieListContainer = document.querySelector('.movie-list');
const myList = JSON.parse(localStorage.getItem('myList')) || [];

if (myList.length === 0) {
    movieListContainer.innerHTML = '<p>Aucun film dans votre liste pour le moment.</p>';
} else {
    myList.forEach(movie => {
        const movieItem = `
            <div class="movie-item">
                <img src="${movie.poster}" alt="${movie.title}">
                <h5>${movie.title}</h5>
            </div>
        `;
        movieListContainer.innerHTML += movieItem;
    });
}



