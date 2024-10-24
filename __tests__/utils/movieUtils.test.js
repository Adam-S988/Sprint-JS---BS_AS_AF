const {
  getRandomMoviesByGenre,
  getTopRatedMovies,
  formatMovieData,
  getRandomGenre,
  generateMovieReport,
  getMoviesByGenre,
  getMovieDetailsById,
  selectRandomMovieId,
} = require("../../utils/movieUtils");

const { Movies } = require("../../utils/data");

describe("Movie Utility Functions", () => {
  describe("getMoviesByGenre", () => {
    test("Should return the correct number of movies for the selected genre", () => {
      const genre = "Action";
      const numberOfMovies = 5;
      const movies = getMoviesByGenre(genre, numberOfMovies);
      expect(movies.length).toBeLessThanOrEqual(numberOfMovies);
      movies.forEach((movie) => expect(movie.genre).toContain(genre));
    });

    test("Should return an empty array for a genre that is not in the data file", () => {
      const genre = "Romcom";
      const movies = getMoviesByGenre(genre, 5);
      expect(movies).toEqual([]);
    });

    test("Should return at least 1 movie for a genre that exists in the data file", () => {
      const genre = "Crime";
      const movies = getMoviesByGenre(genre, 1);
      expect(movies.length).toBeGreaterThan(0);
    });
  });

  // describe('getTopRatedMovies', () => {
  //     test('Should return the correct number of top rated movies', () => {
  //         // const numberOfMovies = 10;
  //         // const topRatedMovies = getTopRatedMovies(numberOfMovies);
  //         // expect(topRatedMovies.length).toBeLessThanOrEqual(numberOfMovies);
  //     });

  // test('Should return movies sorted by rating in descending order', () => {
  //     const topRatedMovies = getTopRatedMovies(5);
  //     for (let i = 0; i < topRatedMovies.length - 1; i++) {
  //         expect (topRatedMovies[i].rating).toBeGreaterThanOrEqual(topRatedMovies[i + 1].rating);
  //     }
  // });
  // });

  describe("getMovieDetailsById", () => {
    test("Should return the correct movie for the ID given", () => {
      const movieID = Movies[0].id;
      const movie = getMovieDetailsById(movieID);
      expect(movie).toEqual(Movies[0]);
    });

    test('Should return "Movie not found" for invalid movie ID', () => {
      const movieID = -1;
      const result = getMovieDetailsById(movieID);
      expect(result).toBe("Movie not found");
    });
  });

  describe("selectRandomMovieId", () => {
    test("Should return a valid movie ID from Movies array", () => {
      const movieID = selectRandomMovieId();
      const movieExists = Movies.some((movie) => movie.id === movieID);
      expect(movieExists).toBe(true);
    });

    test("Should return a different movie ID when function is called multiple times ensuring they are randomized", () => {
      const ids = new Set();
      for (let i = 0; i < 10; i++) {
        ids.add(selectRandomMovieId());
      }
      // expect to return at least more than 1 ID during 10 calls
      expect(ids.size).toBeGreaterThan(1);
    });
  });
});

getRandomMoviesByGenre;
