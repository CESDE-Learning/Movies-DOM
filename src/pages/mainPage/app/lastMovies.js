import { getMovies } from "./crud.js";

const fatherID = document.getElementById("sliderPeliculas");

lastMovies(getMovies());

function lastMovies(data) {
  const dataFilter = data.toReversed().slice(0, 6);
  fatherID.innerHTML = useGridMovies(dataFilter);
}

function useGridMovies(data) {
  return `
      <div class="container py-5">
        <div class="row g-4">
          ${data.map(movie => `
            <div class="col-6 col-md-4 col-lg-2">
              <img 
                src="${movie.img}" 
                class="img-fluid rounded shadow" 
                alt="${movie.title}"
              />
            </div>
          `).join("")}
        </div>
      </div>
    `;
}



