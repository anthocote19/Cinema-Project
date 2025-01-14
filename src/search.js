const movies = [
    { id: 1, title: "Inception", poster: "https://via.placeholder.com/50x75", link: "movie.html?id=1" },
    { id: 2, title: "The Dark Knight", poster: "https://via.placeholder.com/50x75", link: "movie.html?id=2" },
    { id: 3, title: "Interstellar", poster: "https://via.placeholder.com/50x75", link: "movie.html?id=3" },
    { id: 4, title: "Dunkirk", poster: "https://via.placeholder.com/50x75", link: "movie.html?id=4" },
    { id: 5, title: "Tenet", poster: "https://via.placeholder.com/50x75", link: "movie.html?id=5" },
    { id: 6, title: "The Prestige", poster: "https://via.placeholder.com/50x75", link: "movie.html?id=6" }
]; 

let searchResults = [];
let resultsPerPage = 5;
let currentPage = 1;

const searchBar = document.getElementById('search-bar');
const resultsDiv = document.getElementById('results');
const loadMoreButton = document.getElementById('load-more');

function renderResults() {
    resultsDiv.innerHTML = '';
    const start = (currentPage - 1) * resultsPerPage;
    const end = currentPage * resultsPerPage;

    searchResults.slice(0, end).forEach(movie => {
        const resultDiv = document.createElement('div');
        resultDiv.className = 'result';
        resultDiv.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}">
            <div>
                <h3>${movie.title}</h3>
                <a href="${movie.link}">Learn more</a>
            </div>
        `;
        resultsDiv.appendChild(resultDiv);
    });

    loadMoreButton.style.display = end < searchResults.length ? 'block' : 'none';
}

searchBar.addEventListener('input', () => {
    const query = searchBar.value.toLowerCase();
    searchResults = movies.filter(movie => movie.title.toLowerCase().includes(query));
    currentPage = 1;
    renderResults();
});

loadMoreButton.addEventListener('click', () => {
    currentPage++;
    renderResults();
});


searchBar.dispatchEvent(new Event('input'));
