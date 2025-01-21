document.addEventListener("DOMContentLoaded", () => {
    const loadMoreButton = document.getElementById("loadMoreButton");
    const filmsContainer = document.getElementById("filmsContainer");
    const apiKey = "fa48d4f9";
    const year = 2024;
    let page = 1; 

    loadMoreButton.addEventListener("click", () => {
       
        fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=movie&y=${year}&page=${page}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                if (data.Response === "True") {
                 
                    data.Search.forEach(film => {
                        const filmCard = `
                            <div class="col s12 m4">
                                <div class="card">
                                    <div class="card-image">
                                        <img src="${film.Poster}" alt="${film.Title}">
                                        <span class="card-title">${film.Title}</span>
                                    </div>
                                    <div class="card-content">
                                        <p>Année : ${film.Year}</p>
                                    </div>
                                    <div class="card-action">
                                        <a href="./movie.html?id=${film.imdbID}">En savoir plus</a>
                                    </div>
                                </div>
                            </div>
                        `;
                        filmsContainer.insertAdjacentHTML("beforeend", filmCard);
                    });
                   
                    page++;
                } else {
                 
                    loadMoreButton.innerText = "Aucun autre film trouvé";
                    loadMoreButton.disabled = true;
                }
            })
            .catch(error => {
                console.error("Erreur lors du chargement des films :", error);
                loadMoreButton.innerText = "Erreur lors du chargement";
                loadMoreButton.disabled = true;
            });
    });
});
