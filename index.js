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
app.get("/movie/:id", (req, res) => {
  const movieId = req.params.id;
  const movie = getMovieDetailsById(movieId);
  if (movie) {
    res.render("movies", { movie: movie });
  } else {
    res.status(404).send("Movie not found!");
  }
});

// Route to render top rated movies
app.get("/top-rated", (req, res) => {
  const topMovies = getTopRatedMovies(15);
  res.render("topMovies", { movies: topMovies });
});

// Route for upcoming movies (fictional movies are parsed out through the null filter.)
app.get("/upcoming-movies", (req, res) => {
  const upcomingMovie = Movies.filter((movie) => movie.rating === null);
  res.render("upcomingMovies", { movies: upcomingMovie });
});

// Route for random movie
app.get("/random-movie", (req, res) => {
  const randomMovieId = selectRandomMovieId();
  res.redirect(`/movie/${randomMovieId}`);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
