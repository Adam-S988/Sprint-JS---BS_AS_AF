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
  WAR: "War", // What is it good for? Absolutely Nothing!
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
    extendedInfo: {
      longDescription:
        "A powerful and timeless exploration of crime, family, and power, The Godfather follows the transformation of Michael Corleone from reluctant outsider to ruthless mafia boss, in an epic tale of loyalty and betrayal.",
      starring: ["Marlon Brando", "Al Pacino", "James Caan", "Diane Keaton"],
    },
  },
  {
    id: 2,
    title: "Inception",
    releaseYear: 2010,
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea.",
    director: "Christopher Nolan",
    rating: 8.8,
    genre: Genres.SCI_FI,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729550953/Inception_t8blpf.jpg",
    extendedInfo: {
      longDescription:
        "A visually stunning, mind-bending thriller where a team of thieves infiltrates dreams to plant an idea in a target’s mind. A tale of dreams within dreams that explores the boundaries of reality and consciousness.",
      starring: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
    },
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
    extendedInfo: {
      longDescription:
        "A gritty and intense take on the Batman saga, The Dark Knight delves deep into the battle between Batman and the anarchic Joker, blurring the lines between heroism and villainy.",
      starring: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    },
  },
  {
    id: 4,
    title: "Schindler's List",
    releaseYear: 1993,
    description: // Whoever saves one life, saves the world entire 
      "In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce.",
    director: "Steven Spielberg",
    rating: 9.0,
    genre: Genres.DRAMA,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729550953/Schindlers_list_hrjmeh.jpg",
    extendedInfo: {
      longDescription:
        "A haunting and moving portrayal of the Holocaust, Schindler's List tells the true story of Oskar Schindler, a German businessman who saved over a thousand Jews from Nazi persecution by employing them in his factories.",
      starring: ["Liam Neeson", "Ralph Fiennes", "Ben Kingsley"],
    },
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
    extendedInfo: {
      longDescription:
        "An influential film that blends dark humor, crime, and nonlinear storytelling. Pulp Fiction is known for its eclectic cast, witty dialogue, and stylized violence, as it weaves together various stories of crime and redemption.",
      starring: ["John Travolta", "Samuel L. Jackson", "Uma Thurman"],
    },
  },
  {
    id: 6,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    releaseYear: 2001,
    description: // All we have to decide is what to do with the time that is given us
      "A meek Hobbit and eight companions set out on a journey to destroy a powerful ring.",
    director: "Peter Jackson",
    rating: 8.8,
    genre: Genres.FANTASY,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729550952/LOTR_fellowship_vxcu9x.jpg",
    extendedInfo: {
      longDescription:
        "The beginning of an epic trilogy that follows the journey of Frodo Baggins as he attempts to destroy the One Ring, an artifact of immense power, before it can fall into the hands of the dark lord Sauron.",
      starring: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"],
    },
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
    extendedInfo: {
      longDescription:
        "A heartwarming story of an unlikely hero, Forrest Gump follows a man of limited intelligence but endless optimism as he unwittingly influences major historical events throughout the 20th century.",
      starring: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
    },
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
    extendedInfo: {
      longDescription:
        "Fight Club is a provocative and controversial film about the breakdown of societal norms, focusing on an unnamed protagonist who creates a fight club as an outlet for male aggression and dissatisfaction.",
      starring: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
    },
  },
  {
    id: 9,
    title: "Interstellar",
    releaseYear: 2014,
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    director: "Christopher Nolan",
    rating: 8.6,
    genre: Genres.SCI_FI,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729550952/Interstellar_ndnt1h.jpg",
    extendedInfo: {
      longDescription:
        "A visually spectacular exploration of space and time, Interstellar follows a team of astronauts on a mission to find a new habitable planet for humanity, while dealing with the emotional toll of leaving loved ones behind.",
      starring: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    },
  },
  {
    id: 10,
    title: "Gladiator",
    releaseYear: 2000,
    description:
      "A former Roman general sets out to exact vengeance against the corrupt emperor who murdered his family.",
    director: "Ridley Scott",
    rating: 8.5,
    genre: Genres.ACTION,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729550953/Gladiator_mjphhf.jpg",
    extendedInfo: {
      longDescription:
        "An epic historical drama about Maximus, a betrayed Roman general who becomes a gladiator in the arena, seeking revenge against the emperor who destroyed his life. A film about honor, loyalty, and revenge.",
      starring: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
    },
  },
  {
    id: 11,
    title: "The Matrix",
    releaseYear: 1999,
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality.",
    director: "Lana Wachowski, Lilly Wachowski",
    rating: 8.7,
    genre: Genres.SCI_FI,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729550953/The_Matrix_fqe1ha.jpg",
    extendedInfo: {
      longDescription:
        "A groundbreaking sci-fi film that questions the nature of reality, The Matrix follows Neo, a hacker who discovers that the world he knows is a computer simulation, controlled by machines.",
      starring: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    },
  },
  {
    id: 12,
    title: "Saving Private Ryan",
    releaseYear: 1998,
    description:
      "Following the Normandy landings, a group of soldiers goes behind enemy lines to retrieve a paratrooper.",
    director: "Steven Spielberg",
    rating: 8.6,
    genre: Genres.WAR,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729550954/Saving_Private_Ryan_f0iamr.jpg",
    extendedInfo: {
      longDescription:
        "A powerful depiction of the brutality of war, Saving Private Ryan tells the story of a group of soldiers who are sent to rescue a paratrooper during World War II, emphasizing the cost of heroism and sacrifice.",
      starring: ["Tom Hanks", "Matt Damon", "Tom Sizemore"],
    },
  },
  {
    id: 13,
    title: "The Shawshank Redemption",
    releaseYear: 1994,
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    director: "Frank Darabont",
    rating: 9.3,
    genre: Genres.DRAMA,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729550954/Shawshank_Redemption_vndtcc.jpg",
    extendedInfo: {
      longDescription:
        "An enduring story of hope and friendship set in a maximum-security prison, The Shawshank Redemption follows the story of Andy Dufresne, a man wrongly convicted of murder, and his friendship with fellow inmate Red.",
      starring: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    },
  },
  {
    id: 14,
    title: "Parasite",
    releaseYear: 2019,
    description:
      "A poor family schemes to become employed by a wealthy family and infiltrate their household by posing as unrelated individuals.",
    director: "Bong Joon Ho",
    rating: 8.6,
    genre: Genres.THRILLER,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729550952/Parasite_qt0nkz.jpg",
    extendedInfo: {
      longDescription:
        "A biting social commentary on class inequality, Parasite is a thriller that follows the members of a poor family as they scheme to infiltrate the lives of a wealthy family, leading to unexpected and tragic consequences.",
      starring: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"],
    },
  },
  {
    id: 15,
    title: "Mad Max: Fury Road",
    releaseYear: 2015,
    description:
      "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland.",
    director: "George Miller",
    rating: 8.1,
    genre: Genres.ACTION,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729550952/Mad_Max_Fury_Road_d8nltb.jpg",
    extendedInfo: {
      longDescription:
        "An action-packed thrill ride set in a post-apocalyptic wasteland, Mad Max: Fury Road follows Imperator Furiosa and Max as they try to escape from a ruthless warlord and find refuge in a green land across the desert.",
      starring: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
    },
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
    extendedInfo: {
      longDescription:
        "A beloved Disney classic, The Lion King tells the story of Simba, a young lion cub who must embrace his destiny as the king of the Pride Lands after his father's death.",
      starring: ["Matthew Broderick", "James Earl Jones", "Jeremy Irons"],
    },
  },
  {
    id: 17,
    title: "Avengers: Endgame",
    releaseYear: 2019,
    description:
      "After the devastating events of Infinity War, the Avengers assemble once more to undo Thanos' destruction.",
    director: "Anthony Russo, Joe Russo",
    rating: 8.4,
    genre: Genres.ACTION,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729550953/Avengers_Endgame_mwlfyq.jpg",
    extendedInfo: {
      longDescription:
        "A grand finale to the Marvel Cinematic Universe’s Infinity Saga, Avengers: Endgame sees the remaining Avengers team up to reverse the catastrophic events caused by Thanos, leading to an epic showdown.",
      starring: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
    },
  },
  {
    id: 18,
    title: "Toy Story",
    releaseYear: 1995,
    description:
      "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.",
    director: "John Lasseter",
    rating: 8.3,
    genre: Genres.ANIMATION,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729550954/Toy_Story_vcghpj.jpg",
    extendedInfo: {
      longDescription:
        "The first entirely computer-animated feature film, Toy Story is a heartwarming tale of friendship and rivalry between a cowboy doll named Woody and a space ranger named Buzz Lightyear, who vie for the affection of their owner Andy.",
      starring: ["Tom Hanks", "Tim Allen", "Don Rickles"],
    },
  },
  {
    id: 19,
    title: "Titanic",
    releaseYear: 1997,
    description:
      "A young aristocrat falls in love with a kind but poor artist aboard the ill-fated R.M.S. Titanic.",
    director: "James Cameron",
    rating: 7.9,
    genre: Genres.ROMANCE,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729550953/Titanic_dynzh7.jpg",
    extendedInfo: {
      longDescription:
        "A sweeping romantic epic set against the backdrop of the tragic sinking of the Titanic, James Cameron’s film tells the story of Jack and Rose, two lovers from different social classes whose romance is doomed by the ship’s sinking.",
      starring: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"],
    },
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
    extendedInfo: {
      longDescription:
        "A groundbreaking adventure film that blends cutting-edge special effects with gripping action, Jurassic Park follows a group of visitors to a dinosaur theme park where the attractions have gone terribly wrong.",
      starring: ["Sam Neill", "Laura Dern", "Jeff Goldblum"],
    },
  },
  // (Movies 21-30 with extended info here)
  {
    id: 21,
    title: "The Silence of the Lambs",
    releaseYear: 1991,
    description:
      "A young F.B.I. cadet must confide in an incarcerated and manipulative killer to receive his help on catching another serial killer.",
    director: "Jonathan Demme",
    rating: 8.6,
    genre: Genres.THRILLER,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729703287/The_Silence_of_the_Lambs_pebih8.jpg",
    extendedInfo: {
      longDescription:
        "A gripping psychological thriller, The Silence of the Lambs follows FBI trainee Clarice Starling as she seeks the help of imprisoned serial killer Dr. Hannibal Lecter to catch another killer.",
      starring: ["Jodie Foster", "Anthony Hopkins", "Scott Glenn"],
    },
  },
  {
    id: 22,
    title: "The Green Mile",
    releaseYear: 1999,
    description:
      "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
    director: "Frank Darabont",
    rating: 8.6,
    genre: Genres.DRAMA,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729703288/The_Green_Mile_jvyrhd.jpg",
    extendedInfo: {
      longDescription:
        "A supernatural drama about a death row corrections officer who witnesses miracles performed by a man condemned for murder. The Green Mile is a moving story of justice, faith, and redemption.",
      starring: ["Tom Hanks", "Michael Clarke Duncan", "David Morse"],
    },
  },
  {
    id: 23,
    title: "The Prestige",
    releaseYear: 2006,
    description:
      "Two stage magicians engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.",
    director: "Christopher Nolan",
    rating: 8.5,
    genre: Genres.SCI_FI,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729703288/The_Prestige_tttcgn.jpg",
    extendedInfo: {
      longDescription:
        "A riveting tale of obsession, secrecy, and rivalry, The Prestige pits two magicians against each other in a deadly competition to create the perfect stage illusion.",
      starring: ["Hugh Jackman", "Christian Bale", "Scarlett Johansson"],
    },
  },
  {
    id: 24,
    title: "Braveheart",
    releaseYear: 1995,
    description:
      "Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England.",
    director: "Mel Gibson",
    rating: 8.4,
    genre: Genres.ACTION,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729703287/Braveheart_bo8upf.jpg",
    extendedInfo: {
      longDescription:
        "An epic war drama that chronicles the story of William Wallace, a Scottish knight who leads a rebellion against the tyranny of English rule, Braveheart is a tale of heroism, sacrifice, and the fight for freedom.",
      starring: ["Mel Gibson", "Sophie Marceau", "Patrick McGoohan"],
    },
  },
  {
    id: 25,
    title: "Glory",
    releaseYear: 1989,
    description:
      "Robert Gould Shaw leads the U.S. Civil War's first all-black volunteer company, fighting prejudices from both his own Union Army and the Confederates.",
    director: "Edward Zwick",
    rating: 7.8,
    genre: Genres.WAR,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729703288/Glory_xsjtz0.jpg",
    extendedInfo: {
      longDescription:
        "A powerful story of courage and sacrifice, Glory follows the formation and struggles of the first African American unit to fight for the Union in the U.S. Civil War, under the leadership of Colonel Robert Shaw.",
      starring: ["Matthew Broderick", "Denzel Washington", "Morgan Freeman"],
    },
  },
  {
    id: 26,
    title: "Back to the Future",
    releaseYear: 1985,
    description:
      "Marty McFly is sent 30 years into the past in a time-traveling DeLorean invented by his eccentric friend, Doc Brown.",
    director: "Robert Zemeckis",
    rating: 8.5,
    genre: Genres.SCI_FI,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729703287/Back_to_the_Future_ijarlk.jpg",
    extendedInfo: {
      longDescription:
        "A beloved time-travel adventure, Back to the Future follows Marty McFly, a teenager who travels back in time and inadvertently prevents his parents from meeting, putting his own existence at risk.",
      starring: ["Michael J. Fox", "Christopher Lloyd", "Lea Thompson"],
    },
  },
  {
    id: 27,
    title: "Goodfellas",
    releaseYear: 1990,
    description:
      "The story of Henry Hill's life in the mob, focusing on his relationship with his wife and partners in the Italian-American crime syndicate.",
    director: "Martin Scorsese",
    rating: 8.7,
    genre: Genres.CRIME,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729703288/Goodfellas_vpy50n.jpg",
    extendedInfo: {
      longDescription:
        "A gritty and realistic portrayal of the rise and fall of a gangster, Goodfellas chronicles the life of Henry Hill and his involvement in the Italian-American mafia, told with Scorsese's signature flair.",
      starring: ["Ray Liotta", "Robert De Niro", "Joe Pesci"],
    },
  },
  {
    id: 28,
    title: "The Departed",
    releaseYear: 2006,
    description:
      "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
    director: "Martin Scorsese",
    rating: 8.5,
    genre: Genres.CRIME,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729703287/The_Departed_bxf7zu.jpg",
    extendedInfo: {
      longDescription:
        "A tense and twisting crime drama, The Departed is a story of two men on opposite sides of the law, each trying to expose the other's identity within a dangerous Boston crime syndicate.",
      starring: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson"],
    },
  },
  {
    id: 29,
    title: "Whiplash",
    releaseYear: 2014,
    description:
      "A promising young drummer enrolls at a cutthroat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
    director: "Damien Chazelle",
    rating: 8.5,
    genre: Genres.DRAMA,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729703287/Whiplash_psxum4.jpg",
    extendedInfo: {
      longDescription:
        "A gripping and intense drama about ambition and perfection, Whiplash tells the story of a young drummer pushed to the brink by a ruthless instructor in his quest to become one of the greats.",
      starring: ["Miles Teller", "J.K. Simmons", "Paul Reiser"],
    },
  },
  {
    id: 30,
    title: "The Social Network",
    releaseYear: 2010,
    description:
      "Harvard student Mark Zuckerberg creates Facebook while facing lawsuits from the twins who claim he stole their idea, and a co-founder who was squeezed out.",
    director: "David Fincher",
    rating: 7.8,
    genre: Genres.DRAMA,
    thumbnail:
      "https://res.cloudinary.com/dre1ubhqk/image/upload/v1729703288/The_Social_Network_ihxhaq.jpg",
    extendedInfo: {
      longDescription:
        "A compelling and fast-paced drama about the creation of Facebook, The Social Network explores the legal battles and personal betrayals that surrounded Mark Zuckerberg as he built the most influential social media platform.",
      starring: ["Jesse Eisenberg", "Andrew Garfield", "Justin Timberlake"],
    },
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
