document.addEventListener("DOMContentLoaded", () => {
    const movieDetailsDiv = document.getElementById("movieDetails");
    const params = new URLSearchParams(window.location.search);
    const movieID = params.get("id");

    if (!movieID) {
        movieDetailsDiv.innerHTML = "<h1>Aucun film sélectionné.</h1>";
        return;
    }
    fetch(`https://www.omdbapi.com/?apikey=fa48d4f9&i=${movieID}&plot=full`)
        .then(response => response.json())
        .then(data => {
            if (data.Response === "True") {
                const dvdRelease = data.DVD ? new Date(data.DVD).toLocaleDateString("fr-FR") : "Non disponible";
                movieDetailsDiv.innerHTML = `
                    <h1>${data.Title}</h1>
                    <img src="${data.Poster}" alt="Poster de ${data.Title}" class="movie-poster">
                    <p><strong>Résumé :</strong> ${data.Plot}</p>
                    <p><strong>Genre :</strong> ${data.Genre}</p>
                    <p><strong>Acteurs :</strong> ${data.Actors}</p>
                    <p><strong>Notes :</strong> ${data.Ratings.map(rating => `${rating.Source}: ${rating.Value}`).join(", ")}</p>
                    <p><strong>Date de sortie en DVD :</strong> ${dvdRelease}</p>
                `;
            } else {
                movieDetailsDiv.innerHTML = `<h1>Film introuvable.</h1>`;
            }
        })
        .catch(error => {
            console.error("Erreur lors de la récupération des détails du film :", error);
            movieDetailsDiv.innerHTML = `<h1>Erreur lors de la récupération des détails du film.</h1>`;
        });
});
