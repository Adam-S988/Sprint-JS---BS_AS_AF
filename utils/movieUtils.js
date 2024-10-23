const { Movies, Genres } = require("./data");

/**
 * Get `x` movies by genre
 * @param {Genres} genre - The genre of the movies
 * @param {number} x - The number of movies to retrieve
 * @returns {Array.<Movies>} - An array of movies matching the genre
 */
function getMoviesByGenre(genre, x) {
  // Filter movies by genre
  const moviesByGenre = Movies.filter((movie) => movie.genre.includes(genre));
  // Return result "x" movies
  return moviesByGenre.slice(0, x);
}

/**
 * Get the `x` top rated movies, ordered by rating
 * @param {number} x - The number of top-rated movies to retrieve
 * @returns {Array.<Movies>} - An array of top-rated movies
 */
function getTopRatedMovies(x) {
  // Sort Movies in descending order by rating by comparing two movies at a time in array
  Movies.sort((movie1, movie2) => {
    // Compare ratings and put the movie with higher rating before the other
    return movie2.rating - movie1.rating;
  });
  // Get the top "x" movies from the sorted array
  const topRatedMovies = Movies.slice(0, 15);
  // Return array of the top-rated movies
  return topRatedMovies;
}

/**
 * Get the details of a movie by its ID
 * @param {number} id - The ID of the movie
 * @returns {Movies} - The movie object
 */
function getMovieDetailsById(id) {
  // Use the find method to search the Movies array for a movie object with a matching ID
  const movie = Movies.find((movie) => movie.id === id);
  console.log(movie);
  // Check if the movie was found
  if (movie) {
    // Return movie if found
    return movie;
  } else {
    // else return a message "not found"
    return "Movie not found";
  }
}

/**
 * Select a random movie ID
 * @returns {number} - A random movie ID
 */
function selectRandomMovieId() {
  // Generate a random index between 0 and the last index of the Movies array using Math.Random
  // Use Math.floor to round to nearest whole number returning a valid index number
  const randomIndex = Math.floor(Math.random() * Movies.length);
  // Return the ID of the movie that was randomly selected
  return Movies[randomIndex].id;
}

// get 9 random movies

function getRandomMovies(num = 9) {
  const filteredMovies = Movies.filter((movie) => movie.rating !== null); // WON'T RETURN FICTIONAL MOVIES ON MAIN
  const shuffledMovies = filteredMovies.sort(() => 0.5 - Math.random());
  return shuffledMovies.slice(0, num);
}

// get 9 random unreleased movies

function getUnreleasedMovies(num = 5) {
  const filteredMovies = Movies.filter((movie) => movie.rating === null); // RETURN FICTIONAL MOVIES ON UPCOMING
  const shuffledMovies = filteredMovies.sort(() => 0.5 - Math.random());
  return shuffledMovies.slice(0, num);
}

// Export the functions to be used in other modules
module.exports = {
  getMoviesByGenre,
  getTopRatedMovies,
  getMovieDetailsById,
  selectRandomMovieId,
  getRandomMovies,
  getUnreleasedMovies,
};
