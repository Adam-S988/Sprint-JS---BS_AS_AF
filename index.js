const express = require("express");
const path = require("path");
const {
  getTopRatedMovies,
  getMoviesByGenre,
  getMovieDetailsById,
  selectRandomMovieId,
} = require("./utils/movieUtils");
const { Movies } = require("./utils/data");
const { getRandomMovies } = require("./utils/movieUtils");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

// Route to render the index page
app.get("/", (req, res) => {
  const randomMovies = getRandomMovies(9);
  res.render("index", { movies: randomMovies }); // Render the index.ejs file
});

// Route to render movie details
// Use async-await to handle requests 
app.get("/movie/:id", async (req, res) => {
  try {
    const movieId = Number(req.params.id);
  const movie = await getMovieDetailsById(movieId);
  if (movie) {
    res.render("movies", { movie: movie });
  } else {
    res.status(404).send("Movie not found!");
  }
// Catch error if server is not rendering with error message
} catch (error) {
  res.status(500).send("Internal Server Error");
}
});

// Route to render top rated movies
app.get("/top-rated", (req, res) => {
  const topMovies = getTopRatedMovies(15);
  res.render("topMovies", { movies: topMovies });
});

// Route for upcoming movies (fictional movies are parsed out through the null filter.)
app.get("/upcoming-movies", (req, res) => {
  const upcomingMovies = Movies.filter((movie) => movie.rating === null);
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  const randomUpcomingMovies = shuffleArray(upcomingMovies).slice(0, 5);

  res.render("upcomingMovies", { movies: randomUpcomingMovies });
});

// Route for random movie
app.get("/random-movie", (req, res) => {
  const randomMovieId = selectRandomMovieId();
  res.redirect(`/movie/${randomMovieId}`);
});

// Route for movies by genre
app.get("/genre", (req,res) => {
  // extract the genre and limit the number of movies returned to 10
  const { genre, limit = 10 } = req.query;
  // get the movies by the genre specified
  const moviesByGenre = getMoviesByGenre(genre, Number(limit));
  res.render("moviesByGenre", {movies : moviesByGenre, genre});
});

// generate new movie button
app.get("/generate-random-movies", (req, res) => {
  const randomMovies = getRandomMovies(9);
  res.render("index", { movies: randomMovies });
});

// generate fictional movies button
app.get("/generate-fictional-movies", (req, res) => {
  const upcomingMovies = Movies.filter((movie) => movie.rating === null);
  const shuffledUpcomingMovies = upcomingMovies.sort(() => 0.5 - Math.random());
  const limitedUpcomingMovies = shuffledUpcomingMovies.slice(0, 9);
  res.render("index", { movies: limitedUpcomingMovies });
});


const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
