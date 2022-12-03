function submitted() {
  const input = document.getElementById("query").value.toLowerCase();
  const baseURL = document.URL.split("http://localhost:8080")[0];

  // Use an object to map movie keywords to their IDs
  const movieMap = {
      paw: 2,
      patrol: 2,
      demon: 7,
      shang: 1,
      legend: 1,
      dog: 8,
      power: 8,
      bat: 5,
      dark: 5,
      knight: 5,
      "spiderman 2": 9,
      "spiderman 3": 3,
      "don't": 4,
      breathe: 4,
      matrix: 6,
      "the matrix": 6,
      shrek: 11,
      bee: 12,
      movie: 12,
  };

  // Check if the input matches any keywords
  const id = movieMap[input];
  if (id) {
      window.open(`${baseURL}/movie.html?id=${id}`);
  } else {
      alert("We couldn't identify that movie in our catalogue");
  }
}