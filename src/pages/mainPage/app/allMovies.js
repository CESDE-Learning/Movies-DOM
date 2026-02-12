import { getMovies } from "./crud.js";

const fatherID = document.getElementById("gridPeliculas");

printAllMovies(getMovies());

function printAllMovies(data) {
  // Create a new (Data) For no change the main JSON
  // Use Filtrer, compare a title with the b title
  const alfabetFilter = [...data].sort((a, b) =>
    a.title.localeCompare(b.title)
  );
  // On the father create a new Element to complete the all info in the JSOn
  fatherID.innerHTML = useGridMovies(alfabetFilter);
}

// Grid Template
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



