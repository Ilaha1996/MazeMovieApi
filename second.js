document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('id');
    const detailDiv = document.getElementById("DetailDiv");

    if (movieId) {
        fetch(`https://api.tvmaze.com/shows/${movieId}`)
            .then(response => response.json())
            .then(movie => {
                detailDiv.innerHTML = `
                    <div class="container" style="display: flex;">
                        <div class="column left" style="margin-right: 50px;">
                            <img style="width: 550px;" src="${movie.image.original}" alt="${movie.name}">
                        </div>
                        <div class="column right" style="padding-left: 50px; margin-top: 100px;">
                            <h1>${movie.name}</h1>
                            <p><i> ${movie.summary}</i></p>
                            <ul>
                                <li><b>IMDB Rating:</b> ${movie.rating.average}</li>
                                <li><b>Language:</b> ${movie.language}</li>
                                <li><b>Genres:</b> ${movie.genres}</li>
                                <li><b>Premiere date:</b> ${movie.premiered}</li>
                                <li><b>Ended:</b> ${movie.ended}</li>
                            </ul>
                            <div class="card-body">
                                <a href="${movie.officialSite}" class="btn btn-primary" target="_blank">Go to website</a>
                                <a href="index.html" class="btn btn-success">Go back</a>
                            </div>
                        </div>
                    </div>`;
            })
            .catch(error => console.error('Error fetching data:', error));
    } else {
        detailDiv.innerHTML = "<p>No movie ID found in the URL.</p>";
    }
});
