const mongoose = require("mongoose");
require("dotenv").config();

const Movie = require("../models/Movie.model");
const Review = require("../models/Review.model");

const movies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: 1994,
    genre: ["Drama"],
    director: "Frank Darabont",
    rating: 9.3,
    description:
      "A banker is sentenced to life in Shawshank prison for a crime he didn't commit and forms an unlikely bond with a fellow inmate.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: 2,
    title: "The Godfather",
    year: 1972,
    genre: ["Crime", "Drama"],
    director: "Francis Ford Coppola",
    rating: 9.2,
    description:
      "The aging patriarch of an organized crime dynasty transfers control to his reluctant son.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    genre: ["Action", "Crime", "Drama"],
    director: "Christopher Nolan",
    rating: 9.0,
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham into anarchy.",
    poster:
      "https://m.media-amazon.com/images/I/71Gqqky8sEL._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 4,
    title: "Pulp Fiction",
    year: 1994,
    genre: ["Crime", "Drama"],
    director: "Quentin Tarantino",
    rating: 8.9,
    description:
      "A nonlinear crime saga interweaving multiple stories of violence and redemption in Los Angeles.",
    poster:
      "https://m.media-amazon.com/images/I/81UTs3sC5hL._AC_UF894,1000_QL80_DpWeblab_.jpg",
  },
  {
    id: 5,
    title: "Forrest Gump",
    year: 1994,
    genre: ["Drama", "Romance"],
    director: "Robert Zemeckis",
    rating: 8.8,
    description:
      "A slow-witted but kind-hearted man unintentionally influences many historical events in the 20th century U.S.",
    poster:
      "https://m.media-amazon.com/images/I/91++WV6FP4L._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 6,
    title: "Inception",
    year: 2010,
    genre: ["Action", "Adventure", "Sci-Fi"],
    director: "Christopher Nolan",
    rating: 8.8,
    description:
      "A thief who steals corporate secrets through dream-sharing technology is given a chance at redemption.",
    poster: "https://m.media-amazon.com/images/I/912AErFSBHL.jpg",
  },
  {
    id: 7,
    title: "Fight Club",
    year: 1999,
    genre: ["Drama"],
    director: "David Fincher",
    rating: 8.8,
    description:
      "An insomniac and a soap salesman form an underground fight club that spirals out of control.",
    poster:
      "https://m.media-amazon.com/images/I/71YFxhhSRPL._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 8,
    title: "The Matrix",
    year: 1999,
    genre: ["Action", "Sci-Fi"],
    director: "The Wachowskis",
    rating: 8.7,
    description:
      "A computer hacker discovers reality is a simulation and joins a rebellion to free humanity.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: 9,
    title: "Goodfellas",
    year: 1990,
    genre: ["Biography", "Crime", "Drama"],
    director: "Martin Scorsese",
    rating: 8.7,
    description:
      "The rise and fall of mob associate Henry Hill and his life in the mafia.",
    poster: "https://m.media-amazon.com/images/I/61pcqjUWyaL.jpg",
  },
  {
    id: 10,
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
    genre: ["Action", "Adventure", "Drama"],
    director: "Peter Jackson",
    rating: 8.9,
    description:
      "The final battle for Middle-earth begins as Frodo nears Mount Doom to destroy the One Ring.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTZkMjBjNWMtZGI5OC00MGU0LTk4ZTItODg2NWM3NTVmNWQ4XkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: 11,
    title: "Interstellar",
    year: 2014,
    genre: ["Adventure", "Drama", "Sci-Fi"],
    director: "Christopher Nolan",
    rating: 8.6,
    description:
      "A team of explorers travel through a wormhole to save humanity from a dying Earth.",
    poster: "https://m.media-amazon.com/images/I/91vIHsL-zjL.jpg",
  },
  {
    id: 12,
    title: "Se7en",
    year: 1995,
    genre: ["Crime", "Drama", "Mystery"],
    director: "David Fincher",
    rating: 8.6,
    description:
      "Two detectives hunt a serial killer who uses the seven deadly sins as motives.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BY2IzNzMxZjctZjUxZi00YzAxLTk3ZjMtODFjODdhMDU5NDM1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: 13,
    title: "The Silence of the Lambs",
    year: 1991,
    genre: ["Crime", "Drama", "Thriller"],
    director: "Jonathan Demme",
    rating: 8.6,
    description:
      "A young FBI cadet seeks the help of an imprisoned cannibal to catch another killer.",
    poster:
      "https://m.media-amazon.com/images/I/91PATn10zTL._AC_UF894,1000_QL80_DpWeblab_.jpg",
  },
  {
    id: 14,
    title: "Saving Private Ryan",
    year: 1998,
    genre: ["Drama", "War"],
    director: "Steven Spielberg",
    rating: 8.6,
    description:
      "During WWII, a group of soldiers is sent to rescue a paratrooper behind enemy lines.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZGZhZGQ1ZWUtZTZjYS00MDJhLWFkYjctN2ZlYjE5NWYwZDM2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: 15,
    title: "The Green Mile",
    year: 1999,
    genre: ["Crime", "Drama", "Fantasy"],
    director: "Frank Darabont",
    rating: 8.6,
    description:
      "A death row corrections officer encounters a gentle giant with mysterious healing powers.",
    poster: "https://m.media-amazon.com/images/I/71Ju7--kiiL.jpg",
  },
  {
    id: 16,
    title: "The Prestige",
    year: 2006,
    genre: ["Drama", "Mystery", "Sci-Fi"],
    director: "Christopher Nolan",
    rating: 8.5,
    description:
      "Two rival magicians obsessively compete to create the ultimate stage illusion.",
    poster:
      "https://m.media-amazon.com/images/I/619c+UQZaOL._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 17,
    title: "Gladiator",
    year: 2000,
    genre: ["Action", "Adventure", "Drama"],
    director: "Ridley Scott",
    rating: 8.5,
    description:
      "A betrayed Roman general seeks revenge as a gladiator in the Colosseum.",
    poster:
      "https://m.media-amazon.com/images/I/91sdz07c9FL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 18,
    title: "Whiplash",
    year: 2014,
    genre: ["Drama", "Music"],
    director: "Damien Chazelle",
    rating: 8.5,
    description:
      "A young drummer pushes his limits under the brutal training of a perfectionist instructor.",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMQwhyfUObMDPHP9sCLKa3Po1PF8A885TAOQ&s",
  },
  {
    id: 19,
    title: "The Departed",
    year: 2006,
    genre: ["Crime", "Drama", "Thriller"],
    director: "Martin Scorsese",
    rating: 8.5,
    description:
      "An undercover cop and a mole infiltrate each other’s organizations in a deadly game of deception.",
    poster:
      "https://m.media-amazon.com/images/I/81ZOilPKzYL._AC_UF894,1000_QL80_DpWeblab_.jpg",
  },
  {
    id: 20,
    title: "Parasite",
    year: 2019,
    genre: ["Drama", "Thriller"],
    director: "Bong Joon Ho",
    rating: 8.5,
    description:
      "A poor family schemes to infiltrate a wealthy household with unexpected consequences.",
    poster:
      "https://m.media-amazon.com/images/I/71lrpAOFQJS._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 21,
    title: "Joker",
    year: 2019,
    genre: ["Crime", "Drama", "Thriller"],
    director: "Todd Phillips",
    rating: 8.4,
    description:
      "A mentally troubled man transforms into the criminal mastermind known as the Joker.",
    poster:
      "https://m.media-amazon.com/images/I/81YdUDaMiWL._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 22,
    title: "Avengers: Endgame",
    year: 2019,
    genre: ["Action", "Adventure", "Drama"],
    director: "Anthony and Joe Russo",
    rating: 8.4,
    description:
      "The Avengers assemble one final time to undo Thanos’s destruction and restore the universe.",
    poster:
      "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0,0,540,810",
  },
  {
    id: 23,
    title: "The Lion King",
    year: 1994,
    genre: ["Animation", "Adventure", "Drama"],
    director: "Roger Allers, Rob Minkoff",
    rating: 8.5,
    description:
      "A young lion prince flees his kingdom after the death of his father and finds his destiny.",
    poster:
      "https://m.media-amazon.com/images/I/81x1-7zDMsL._UF894,1000_QL80_.jpg",
  },
  {
    id: 24,
    title: "The Truman Show",
    year: 1998,
    genre: ["Comedy", "Drama", "Sci-Fi"],
    director: "Peter Weir",
    rating: 8.2,
    description:
      "An insurance salesman discovers his entire life is a reality TV show.",
    poster:
      "https://m.media-amazon.com/images/I/71zEnyA+49L._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 25,
    title: "Django Unchained",
    year: 2012,
    genre: ["Drama", "Western"],
    director: "Quentin Tarantino",
    rating: 8.4,
    description:
      "A freed slave teams up with a bounty hunter to rescue his wife from a brutal plantation owner.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTNmZTA3NDMtYzlkNC00ZmNmLWI1MjUtMjYyOWE3ZTQ4ODFhXkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: 26,
    title: "The Social Network",
    year: 2010,
    genre: ["Biography", "Drama"],
    director: "David Fincher",
    rating: 7.8,
    description:
      "The story of Facebook’s creation and the legal battles that followed its rise.",
    poster:
      "https://m.media-amazon.com/images/I/81s3kbveNJL._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 27,
    title: "Shutter Island",
    year: 2010,
    genre: ["Mystery", "Thriller"],
    director: "Martin Scorsese",
    rating: 8.2,
    description:
      "A U.S. Marshal investigates a psychiatric facility on a remote island with dark secrets.",
    poster:
      "https://m.media-amazon.com/images/I/71QN2VHaHOL._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 28,
    title: "The Grand Budapest Hotel",
    year: 2014,
    genre: ["Adventure", "Comedy", "Crime"],
    director: "Wes Anderson",
    rating: 8.1,
    description:
      "A concierge and his protégé get caught up in theft and murder during wartime Europe.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5NzI4NGQtNTg5MC00OGI1LWFiMzgtNTcxZjIyOTEzNjg3XkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: 29,
    title: "La La Land",
    year: 2016,
    genre: ["Comedy", "Drama", "Music"],
    director: "Damien Chazelle",
    rating: 8.0,
    description:
      "A jazz musician and an aspiring actress fall in love while pursuing their dreams in Los Angeles.",
    poster:
      "https://m.media-amazon.com/images/I/719sD5y5gkL._UF1000,1000_QL80_.jpg",
  },
  {
    id: 30,
    title: "The Wolf of Wall Street",
    year: 2013,
    genre: ["Biography", "Comedy", "Crime"],
    director: "Martin Scorsese",
    rating: 8.2,
    description:
      "The outrageous rise and fall of a corrupt stockbroker living a life of excess and crime.",
    poster:
      "https://m.media-amazon.com/images/I/91m2MB2lYFL._AC_UF894,1000_QL80_DpWeblab_.jpg",
  },
];

async function addRandomReviewsToMovies() {
  try {
    const movies = await Movie.find();

    for (const movie of movies) {
      const reviewCount = Math.floor(Math.random() * 5) + 1;
      const reviewIds = [];

      for (let i = 0; i < reviewCount; i++) {
        const reviewerName = `Reviewer_${Math.floor(Math.random() * 1000)}`;
        const rating = Math.floor(Math.random() * 10) + 1;
        const comment = `This is a random comment ${Math.floor(
          Math.random() * 10000
        )}`;

        const review = new Review({
          movie: movie._id,
          reviewer: reviewerName,
          rating: Number(rating),
          comment,
        });

        const savedReview = await review.save();
        reviewIds.push(savedReview._id);
      }

      movie.reviews = movie.reviews.concat(reviewIds);
      await movie.save();

      console.log(`Added ${reviewCount} reviews to movie: ${movie.title}`);
    }

    await mongoose.disconnect();
  } catch (err) {
    console.error(err);
  }
}

// database url
const MONGODB_URL = process.env.MONGODB_URL;

mongoose
  .connect(MONGODB_URL)
  .then(async (x) => {
    const databaseName = x.connections[0].name;
    await Movie.deleteMany();
    await Review.deleteMany();
    await Movie.insertMany(movies);
    console.log("Movies seeded successfully!");
    addRandomReviewsToMovies();
    console.log(`Mongoose connected ${databaseName}`);
  })
  .catch((err) => {
    console.log("Error connecting to mongo: ", err);
  });
