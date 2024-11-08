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
function getTopRatedMovies(x = 15) {
  // Sort Movies in descending order by rating by comparing two movies at a time in array
  const sortedMovies = Movies.sort(
    (movie1, movie2) => movie2.rating - movie1.rating
  );
  return sortedMovies.slice(0, x);
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
 * Select a random movie ID and find similar movies
 * @param {number} limit - max number of similar movies to return
 * @returns {Object} - return object containing random movie and similar movies
 */
function selectRandomMovieId(limit = 3) {
  // Generate a random index between 0 and the last index of the Movies array using Math.Random

  //Filter out movies with null ratings
  const ratedMovies = Movies.filter((movie) => movie.rating !== null);
  // Use Math.floor to round to nearest whole number returning a valid index number
  const randomIndex = Math.floor(Math.random() * ratedMovies.length);
  const randomMovie = ratedMovies[randomIndex];

  // Find movies with the same genre while excluding selected movie
  let similarMovies = Movies.filter(
    (movie) =>
      movie.genre.includes(randomMovie.genre) && movie.id !== randomMovie.id
  );

  // shuffle similarMovies array to get random each time
  for (let i = similarMovies.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [similarMovies[i], similarMovies[j]] = [similarMovies[j], similarMovies[i]];
  }

  // limit the results to the specifies number
  const limitedSimilarMovies = similarMovies.slice(0, limit);

  // Return the random movie and array of similar movies
  return {
    randomMovieId: randomMovie.id,
    similarMovies: limitedSimilarMovies,
  };
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
