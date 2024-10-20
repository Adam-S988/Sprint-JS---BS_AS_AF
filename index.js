const express = require("express");
const path = require("path");
const {
  getTopRatedMovies,
  getMoviesByGenre,
  getMovieDetailsById,
  selectRandomMovieId,
} = require("./utils/movieUtils");
const { Movies, Genres } = require("./utils/data");
const { request } = require("http");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

app.get("/", (request, response) => {
  response.render("index");
});

app.get("/movie/:id", (request, response) => {
  //For use with links like: /movie/1
  const movieId = request.params.id;
  const movie = getMovieDetailsById(movieId);
  if (movie) {
    response.render("movies", { movie: movie });
  } else {
    response.status(404).send("Movie not found!");
  }
});

//Add remaining routes here

app.get("/top-rated", (request, response) => {
  const topMovies = getTopRatedMovies(15);
  response.render("topMovies", { movies: topMovies });
});

// Use the null rating from fictional movies to parse through the data. Considering movies that aren't out yet have a null rating, it's a reliable way to parse data for upcoming movies. - BS Oct 20

app.get("/upcoming-movies", (request, response) => {
  const upcomingMovie = Movies.filter((movie) => movie.rating === null);
  response.render("upcomingMovies", { movies: upcomingMovie });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// random movie routing

app.get("/random-movie", (request, response) => {
  const randomMovieId = selectRandomMovieId();
  response.redirect(`/movie/${randomMovieId}`);
});
