import moviesData from "/src/data/Movies.json";

if (!localStorage.getItem("movies")) localStorage.setItem("movies", JSON.stringify(moviesData));

export const getMovies = () => JSON.parse(localStorage.getItem("movies"));

document.getElementById("btnGuardarPelicula")?.addEventListener("click", () => {
    const movies = getMovies();

    const newMovie = {
        title: document.getElementById("inputTitulo").value,
        director: document.getElementById("inputDirector").value,
        date: document.getElementById("inputAno").value,
        genders: [document.getElementById("inputGenero").value],
        img: document.getElementById("inputImagen").value,
        slug: document.getElementById("inputTitulo").value.toLowerCase().replace(/\s+/g, '-')
    };

    movies.push(newMovie);
    localStorage.setItem("movies", JSON.stringify(movies));
    location.reload();
});
