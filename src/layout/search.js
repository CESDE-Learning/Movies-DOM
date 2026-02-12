import { getMovies } from "../pages/mainPage/app/crud.js";

const movies = getMovies();

const gendersSelect = document.getElementById("selectGenero");
const searchMovieTitle = document.getElementById("inputBuscar");
const sectionID = document.getElementById("search-section");

const resultsContainer = document.createElement("div");
resultsContainer.id = "searchResults";
sectionID.insertAdjacentElement("afterend", resultsContainer);

const uniqueGenders = [...new Set(
    movies.flatMap(movie => movie.genders)
)];

gendersSelect.innerHTML = `<option value="">All Genres</option>`;

uniqueGenders.forEach(gender => {
    const option = document.createElement("option");
    option.value = gender;
    option.textContent = gender;
    gendersSelect.appendChild(option);
});

gendersSelect.addEventListener("change", filterMovies);
searchMovieTitle.addEventListener("input", filterMovies);

function filterMovies() {
    const searchValue = searchMovieTitle.value.toLowerCase();
    const genreValue = gendersSelect.value;

    if (searchValue === "" && genreValue === "") {
        resultsContainer.innerHTML = "";
        return;
    }

    const filtered = movies.filter(movie => {
        const matchTitle = movie.title.toLowerCase().includes(searchValue);
        const matchGenre =
            genreValue === "" || movie.genders.includes(genreValue);

        return matchTitle && matchGenre;
    });

    renderResults(filtered);
}

function renderResults(filteredMovies) {
    if (filteredMovies.length === 0) {
        resultsContainer.innerHTML = "<p>No results found</p>";
        return;
    }

    resultsContainer.innerHTML = filteredMovies
        .map(movie => `<p>${movie.title}</p>`)
        .join("");
}
