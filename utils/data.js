const Genres = {
  ACTION: "Action",
  ADVENTURE: "Adventure",
  ANIMATION: "Animation",
  CRIME: "Crime",
  DRAMA: "Drama",
  FANTASY: "Fantasy",
  HORROR: "Horror",
  ROMANCE: "Romance",
  SCI_FI: "Sci-Fi",
  THRILLER: "Thriller",
  WAR: "War",
};

const Movies = [
  {
    id: 1,
    title: "The Godfather", // LOOK HOW THEY'VE MASSACRED MY BOY
    releaseYear: 1972,
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    director: "Francis Ford Coppola",
    rating: 9.2,
    genre: Genres.CRIME,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729550954/The_Godfather_jbvenm.jpg",
  },
  {
    id: 2,
    title: "Inception", // YOU MUSTN'T BE AFRAID TO DREAM A LITTLE BIGGER DARLING
    releaseYear: 2010,
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea.",
    director: "Christopher Nolan",
    rating: 8.8,
    genre: Genres.SCI_FI,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729550953/Inception_t8blpf.jpg",
  },
  {
    id: 3,
    title: "The Dark Knight", // WANNA KNOW HOW I GOT THESE SCARS
    releaseYear: 2008,
    description:
      "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on Gotham.",
    director: "Christopher Nolan",
    rating: 9.0,
    genre: Genres.ACTION,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729550954/The_Dark_Knight_uldplg.jpg",
  },
  {
    id: 4,
    title: "Schindler's List",
    releaseYear: 1993,
    description:
      "In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce.",
    director: "Steven Spielberg",
    rating: 9.0,
    genre: Genres.DRAMA,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729550953/Schindlers_list_hrjmeh.jpg",
  },
  {
    id: 5,
    title: "Pulp Fiction", // ENGLISH - DO YOU SPEAK IT
    releaseYear: 1994,
    description:
      "The lives of two mob hitmen, a boxer, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    director: "Quentin Tarantino",
    rating: 8.9,
    genre: Genres.CRIME,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729550954/Pulp_Fiction_hc5x3c.jpg",
  },
  {
    id: 6,
    title: "The Lord of the Rings: The Fellowship of the Ring", // HE THAT BREAKS A THING TO FIND OUT WHAT IT IS HAS LEFT THE PATH OF WISDOM
    releaseYear: 2001,
    description:
      "A meek Hobbit and eight companions set out on a journey to destroy a powerful ring.",
    director: "Peter Jackson",
    rating: 8.8,
    genre: Genres.FANTASY,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729550952/LOTR_fellowship_vxcu9x.jpg",
  },
  {
    id: 7,
    title: "Forrest Gump", // JENNNAAAYYYYYY
    releaseYear: 1994,
    description:
      "The presidencies of Kennedy and Johnson, the Vietnam War, and other historical events unfold from the perspective of an Alabama man.",
    director: "Robert Zemeckis",
    rating: 8.8,
    genre: Genres.DRAMA,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729550954/Forrest_Gump_om99bu.jpg",
  },
  {
    id: 8,
    title: "Fight Club", // Brad Pitt wasn't real
    releaseYear: 1999,
    description:
      "An insomniac office worker forms an underground fight club that evolves into something more.",
    director: "David Fincher",
    rating: 8.8,
    genre: Genres.DRAMA,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729550954/Fight_Club_vupkt4.jpg",
  },
  {
    id: 9,
    title: "Interstellar", // I'LL COME BACK FOR YOU MURPH
    releaseYear: 2014,
    description:
      "A team of explorers travels through a wormhole in space in an attempt to ensure humanity's survival.",
    director: "Christopher Nolan",
    rating: 8.6,
    genre: Genres.SCI_FI,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729550952/Interstellar_ndnt1h.jpg",
  },
  {
    id: 10,
    title: "Gladiator", // ARE YOU NOT ENTERTAINED
    releaseYear: 2000,
    description:
      "A former Roman general sets out to exact vengeance against the corrupt emperor who murdered his family.",
    director: "Ridley Scott",
    rating: 8.5,
    genre: Genres.ACTION,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729550953/Gladiator_mjphhf.jpg",
  },
  {
    id: 11,
    title: "The Matrix", // YOU HAVE TO LET IT ALL GO NEO - FEAR, DOUBT AND DISBELIEF. FREE YOUR MIND
    releaseYear: 1999,
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality.",
    director: "Lana Wachowski, Lilly Wachowski",
    rating: 8.7,
    genre: Genres.SCI_FI,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729550953/The_Matrix_fqe1ha.jpg",
  },
  {
    id: 12,
    title: "Saving Private Ryan", // WHEN WAS THE LAST TIME YOU FELT GOOD ABOUT ANYTHING
    releaseYear: 1998,
    description:
      "Following the Normandy landings, a group of soldiers goes behind enemy lines to retrieve a paratrooper.",
    director: "Steven Spielberg",
    rating: 8.6,
    genre: Genres.WAR,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729550954/Saving_Private_Ryan_f0iamr.jpg",
  },
  {
    id: 13,
    title: "The Shawshank Redemption", // HOPE IS A DANGEROUS THING. HOPE CAN DRIVE A MAN INSANE
    releaseYear: 1994,
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    director: "Frank Darabont",
    rating: 9.3,
    genre: Genres.DRAMA,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729550954/Shawshank_Redemption_vndtcc.jpg",
  },
  {
    id: 14,
    title: "Parasite", // THEY ARE NICE BECAUSE THEY ARE RICH
    releaseYear: 2019,
    description:
      "A poor family schemes to become employed by a wealthy family and infiltrate their household by posing as unrelated individuals.",
    director: "Bong Joon Ho",
    rating: 8.6,
    genre: Genres.THRILLER,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729550952/Parasite_qt0nkz.jpg",
  },
  {
    id: 15,
    title: "Mad Max: Fury Road", // MY NAME IS MAX. MY WORLD IS FIRE AND BLOOD
    releaseYear: 2015,
    description:
      "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland.",
    director: "George Miller",
    rating: 8.1,
    genre: Genres.ACTION,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729550952/Mad_Max_Fury_Road_d8nltb.jpg",
  },
  {
    id: 16,
    title: "The Lion King", // LION NOISES
    releaseYear: 1994,
    description:
      "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
    director: "Roger Allers, Rob Minkoff",
    rating: 8.5,
    genre: Genres.ANIMATION,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729550952/The_Lion_King_zf4pt7.jpg",
  },
  {
    id: 17,
    title: "Avengers: Endgame", // AVENGERS, ASSEMBLE
    releaseYear: 2019,
    description:
      "After the devastating events of Infinity War, the Avengers assemble once more to undo Thanos' destruction.",
    director: "Anthony Russo, Joe Russo",
    rating: 8.4,
    genre: Genres.ACTION,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729550953/Avengers_Endgame_mwlfyq.jpg",
  },
  {
    id: 18,
    title: "Toy Story", // SNAP OUT OF IT BUZZZZZZZ
    releaseYear: 1995,
    description:
      "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.",
    director: "John Lasseter",
    rating: 8.3,
    genre: Genres.ANIMATION,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729550954/Toy_Story_vcghpj.jpg",
  },
  {
    id: 19,
    title: "Titanic", // PAINT ME LIKE ONE OF YOUR FRENCH GIRLS
    releaseYear: 1997,
    description:
      "A young aristocrat falls in love with a kind but poor artist aboard the ill-fated R.M.S. Titanic.",
    director: "James Cameron",
    rating: 7.9,
    genre: Genres.ROMANCE,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729550953/Titanic_dynzh7.jpg",
  },
  {
    id: 20,
    title: "Jurassic Park", // LIFE FINDS A WAY
    releaseYear: 1993,
    description:
      "A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids.",
    director: "Steven Spielberg",
    rating: 8.1,
    genre: Genres.ADVENTURE,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729550955/Jurassic_Park_jwho4b.jpg",
  },

  {
    id: 21,
    title: "The Silence of the Lambs", // IT PUTS THE LOTION ON ITS SKIN
    releaseYear: 1991,
    description:
      "A young F.B.I. cadet must confide in an incarcerated and manipulative killer to receive his help on catching another serial killer.",
    director: "Jonathan Demme",
    rating: 8.6,
    genre: Genres.THRILLER,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729703287/The_Silence_of_the_Lambs_pebih8.jpg",
  },

  {
    id: 22,
    title: "The Green Mile", // WE EACH OWE A DEATH
    releaseYear: 1999,
    description:
      "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
    director: "Frank Darabont",
    rating: 8.6,
    genre: Genres.DRAMA,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729703288/The_Green_Mile_jvyrhd.jpg",
  },

  {
    id: 23,
    title: "The Prestige", // ARE YOU WATCHING CLOSELY?
    releaseYear: 2006,
    description:
      "After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.",
    director: "Christopher Nolan",
    rating: 8.5,
    genre: Genres.SCI_FI,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729703288/The_Prestige_tttcgn.jpg",
  },

  {
    id: 24,
    title: "Braveheart", // THEY MAY TAKE OUR LIVES, BUT THEY'LL NEVER TAKE OUR FREEDOM!
    releaseYear: 1995,
    description:
      "Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England.",
    director: "Mel Gibson",
    rating: 8.4,
    genre: Genres.ACTION,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729703287/Braveheart_bo8upf.jpg",
  },

  {
    id: 25,
    title: "Glory", // GIVE 'EM HELL 54TH
    releaseYear: 1989,
    description:
      "Robert Gould Shaw leads the U.S. Civil War's first all-black volunteer company, fighting prejudices from both his own Union Army and the Confederates.",
    director: "Edward Zwick",
    rating: 7.8,
    genre: Genres.WAR,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729703288/Glory_xsjtz0.jpg",
  },

  {
    id: 26,
    title: "Back to the Future", // ROADS? WHERE WE'RE GOING, WE DON'T NEED ROADS
    releaseYear: 1985,
    description:
      "Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, eccentric scientist Doc Brown.",
    director: "Robert Zemeckis",
    rating: 8.5,
    genre: Genres.SCI_FI,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729703287/Back_to_the_Future_ijarlk.jpg",
  },

  {
    id: 27,
    title: "Goodfellas", // AS FAR BACK AS I CAN REMEMBER, I ALWAYS WANTED TO BE A GANGSTER
    releaseYear: 1990,
    description:
      "The story of Henry Hill's life in the mob, focusing on his relationship with his wife and partners in the Italian-American crime syndicate.",
    director: "Martin Scorsese",
    rating: 8.7,
    genre: Genres.CRIME,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729703288/Goodfellas_vpy50n.jpg",
  },

  {
    id: 28,
    title: "The Departed", // WHEN YOU DECIDE TO BE SOMETHING, YOU CAN BE IT
    releaseYear: 2006,
    description:
      "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
    director: "Martin Scorsese",
    rating: 8.5,
    genre: Genres.CRIME,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729703287/The_Departed_bxf7zu.jpg",
  },

  {
    id: 29,
    title: "Whiplash", // WERE YOU RUSHING OR DRAGGING?
    releaseYear: 2014,
    description:
      "A promising young drummer enrolls at a cutthroat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
    director: "Damien Chazelle",
    rating: 8.5,
    genre: Genres.DRAMA,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729703287/Whiplash_psxum4.jpg",
  },

  {
    id: 30,
    title: "The Social Network", // YOU DON’T GET TO 500 MILLION FRIENDS WITHOUT MAKING A FEW ENEMIES
    releaseYear: 2010,
    description:
      "Harvard student Mark Zuckerberg creates Facebook while facing lawsuits from the twins who claim he stole their idea, and a co-founder who was squeezed out.",
    director: "David Fincher",
    rating: 7.8,
    genre: Genres.DRAMA,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729703288/The_Social_Network_ihxhaq.jpg",
  },

  // Fictional unreleased movies
  {
    id: 31,
    title: "Mars Uprising",
    releaseYear: 2025,
    description:
      "In a future where Mars has been colonized, a rebellion threatens to upend the fragile peace between Earth and Mars.",
    director: "Emily Summers",
    rating: null,
    genre: Genres.SCI_FI,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729635733/emptyThumbnail_wxpxqe.png",
  },
  {
    id: 32,
    title: "The Last Astronaut",
    releaseYear: 2024,
    description:
      "The final astronaut aboard an abandoned space station discovers a hidden threat as they try to return home.",
    director: "James Harker",
    rating: null,
    genre: Genres.THRILLER,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729635733/emptyThumbnail_wxpxqe.png",
  },
  {
    id: 33,
    title: "Quantum Paradox",
    releaseYear: 2026,
    description:
      "A scientist experimenting with quantum physics inadvertently creates a reality-destroying anomaly.",
    director: "Isabella Cruz",
    rating: null,
    genre: Genres.SCI_FI,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729635733/emptyThumbnail_wxpxqe.png",
  },
  {
    id: 34,
    title: "Echoes of Tomorrow",
    releaseYear: 2027,
    description:
      "A time traveler struggles to prevent a catastrophic event that could unravel the future.",
    director: "Cameron Gray",
    rating: null,
    genre: Genres.ACTION,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729635733/emptyThumbnail_wxpxqe.png",
  },
  {
    id: 35,
    title: "The Forgotten Island",
    releaseYear: 2025,
    description:
      "Explorers on a mysterious island uncover ancient secrets and unexpected dangers.",
    director: "Lara Stone",
    rating: null,
    genre: Genres.ADVENTURE,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729635733/emptyThumbnail_wxpxqe.png",
  },
  {
    id: 36,
    title: "Nightfall City",
    releaseYear: 2025,
    description:
      "In a dystopian megacity, a lone detective uncovers a conspiracy involving the city's elite.",
    director: "Michael Liu",
    rating: null,
    genre: Genres.CRIME,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729635733/emptyThumbnail_wxpxqe.png",
  },
  {
    id: 37,
    title: "Lunar Colony",
    releaseYear: 2026,
    description:
      "The first lunar colony faces a disaster that threatens to wipe out its inhabitants.",
    director: "Sarah White",
    rating: null,
    genre: Genres.SCI_FI,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729635733/emptyThumbnail_wxpxqe.png",
  },
  {
    id: 38,
    title: "Codebreaker",
    releaseYear: 2024,
    description:
      "A talented hacker gets caught in a web of espionage that could change the world.",
    director: "John Doe",
    rating: null,
    genre: Genres.ACTION,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729635733/emptyThumbnail_wxpxqe.png",
  },
  {
    id: 39,
    title: "Codebreaker 2",
    releaseYear: 2025,
    description:
      "A talented hacker gets caught in a web of espionage that could change the world...Again",
    director: "John Doe",
    rating: null,
    genre: Genres.ACTION,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729635733/emptyThumbnail_wxpxqe.png",
  },

  {
    id: 40,
    title: "Dune Awakening",
    releaseYear: 2027,
    description:
      "Picking up after the events of Dune Part 2, We follow Paul Atreides as he has his final showdown with the Harkonnen.",
    director: "Denis Vileneueve",
    rating: null,
    genre: Genres.SCI_FI,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729635733/emptyThumbnail_wxpxqe.png",
  },

  {
    id: 41,
    title: "Avengers Doomsday",
    releaseYear: 2026,
    description:
      "Picking up long after Avengers Endgame, the team has to assemble once again to face off against Doctor Doom",
    director: "Joe & Anthony Russo",
    rating: null,
    genre: Genres.FANTASY,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729635733/emptyThumbnail_wxpxqe.png",
  },

  {
    id: 42,
    title: "Avengers Secret Wars",
    releaseYear: 2027,
    description: "Unconfirmed synoposis at this time",
    director: "Joe & Anthony Russo",
    rating: null,
    genre: Genres.FANTASY,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729635733/emptyThumbnail_wxpxqe.png",
  },

  {
    id: 43,
    title: "I Am Legend 2",
    releaseYear: 2026,
    description:
      "Robert Neville continues to try and find his place in the post apocalyptic world",
    director: "Francis Lawrence",
    rating: null,
    genre: Genres.SCI_FI,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729635733/emptyThumbnail_wxpxqe.png",
  },

  {
    id: 44,
    title: "Spring",
    releaseYear: 2027,
    description:
      "A group of local college teens head to a spring resort and stumble upon an unresolved crime scene.",
    director: "Quentin Tarantino",
    rating: null,
    genre: Genres.DRAMA,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729635733/emptyThumbnail_wxpxqe.png",
  },

  {
    id: 45,
    title: "Kill Bill Volume 3",
    releaseYear: 2028,
    description: "The Bride returns",
    director: "Quentin Tarantino",
    rating: null,
    genre: Genres.ACTION,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729635733/emptyThumbnail_wxpxqe.png",
  },

  {
    id: 46,
    title: "The Resurrection of Zachary Wheeler",
    releaseYear: 2025,
    description:
      "Resurrected a 100 years after his untimely death, Zachary Wheeler has to find his place in the new world.",
    director: "Bill Hader",
    rating: null,
    genre: Genres.DRAMA,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729635733/emptyThumbnail_wxpxqe.png",
  },

  {
    id: 47,
    title: "Dear to my Heart",
    releaseYear: 2026,
    description:
      "From the director of Toy Story: An uplifting tale of honor and frienship.",
    director: "John Lasseter",
    rating: null,
    genre: Genres.ANIMATION,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729635733/emptyThumbnail_wxpxqe.png",
  },

  {
    id: 48,
    title: "Dear to my Heart 2",
    releaseYear: 2027,
    description: "Description not yet available.",
    director: "John Lasseter",
    rating: null,
    genre: Genres.ANIMATION,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729635733/emptyThumbnail_wxpxqe.png",
  },

  {
    id: 49,
    title: "American Nightmare",
    releaseYear: 2026,
    description: "America isn't what it seems.",
    director: "Ari Aster",
    rating: null,
    genre: Genres.HORROR,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729635733/emptyThumbnail_wxpxqe.png",
  },

  {
    id: 50,
    title: "Nosferatu part 2",
    releaseYear: 2025,
    description: "A direct sequel to the 2024 smash hit Nosferatu.",
    director: "Robert Eggers",
    rating: null,
    genre: Genres.HORROR,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729635733/emptyThumbnail_wxpxqe.png",
  },
];

module.exports = {
  Genres,
  Movies,
};
