const animeQuestions = [
  // --- Attack on Titan (1 - 35) ---
  {
    id: 1,
    category: "Attack on Titan",
    question: "Who is Eren Yeager's adoptive sister?",
    options: ["Mikasa Ackerman", "Armin Arlert", "Historia Reiss", "Hange Zoë"],
    answer: "Mikasa Ackerman",
  },
  {
    id: 2,
    category: "Attack on Titan",
    question:
      "Which of these is a major vertical maneuvering tool used by soldiers?",
    options: ["ODM Gear", "3D Wings", "Sky Harness", "Titan Rope"],
    answer: "ODM Gear",
  },
  {
    id: 3,
    category: "Attack on Titan",
    question: "Which character is known as 'Humanity’s Strongest Soldier'?",
    options: ["Levi Ackerman", "Erwin Smith", "Hange Zoë", "Connie Springer"],
    answer: "Levi Ackerman",
  },
  {
    id: 4,
    category: "Attack on Titan",
    question:
      "Which Titan is unusually large and appears during the fall of Wall Maria?",
    options: ["Colossal Titan", "Armored Titan", "Beast Titan", "Cart Titan"],
    answer: "Colossal Titan",
  },
  {
    id: 5,
    category: "Attack on Titan",
    question: "Who later reveals themselves to be the Armored Titan?",
    options: ["Reiner Braun", "Bertolt Hoover", "Zeke Yeager", "Jean Kirstein"],
    answer: "Reiner Braun",
  },
  {
    id: 6,
    category: "Attack on Titan",
    question: "What is the name of the town where Eren grew up?",
    options: ["Shiganshina", "Trost", "Mitras", "Orvud"],
    answer: "Shiganshina",
  },
  {
    id: 7,
    category: "Attack on Titan",
    question: "Which wall is located in the outermost ring?",
    options: ["Wall Maria", "Wall Rose", "Wall Sina", "Wall North"],
    answer: "Wall Maria",
  },
  {
    id: 8,
    category: "Attack on Titan",
    question: "Which character is a close childhood friend of Eren and Mikasa?",
    options: ["Armin Arlert", "Jean Kirstein", "Marco Bott", "Sasha Blouse"],
    answer: "Armin Arlert",
  },
  {
    id: 9,
    category: "Attack on Titan",
    question: "Who becomes the commander of the Survey Corps after Erwin?",
    options: [
      "Hange Zoë",
      "Levi Ackerman",
      "Mikasa Ackerman",
      "Connie Springer",
    ],
    answer: "Hange Zoë",
  },
  {
    id: 10,
    category: "Attack on Titan",
    question:
      "Which Titan is primarily associated with intelligence and throwing ability?",
    options: ["Beast Titan", "Female Titan", "Colossal Titan", "Armored Titan"],
    answer: "Beast Titan",
  },
  {
    id: 11,
    category: "Attack on Titan",
    question:
      "Which character is famous for cutting off a Titan’s nape with precise strikes?",
    options: ["Levi Ackerman", "Erwin Smith", "Hange Zoë", "Armin Arlert"],
    answer: "Levi Ackerman",
  },
  {
    id: 12,
    category: "Attack on Titan",
    question:
      "Which family is revealed to hold royal blood and political significance?",
    options: ["Reiss", "Yeager", "Braun", "Hoover"],
    answer: "Reiss",
  },
  {
    id: 13,
    category: "Attack on Titan",
    question:
      "What is the name of the flying (maneuver) equipment's gas-propelled blades accessory often used?",
    options: ["Blades", "Grapnel hooks", "Gas canisters", "Wing thrusters"],
    answer: "Gas canisters",
  },
  {
    id: 14,
    category: "Attack on Titan",
    question:
      "Who inherits the Founding Titan powers at one point in the story?",
    options: [
      "Eren Yeager",
      "Historia Reiss",
      "Armin Arlert",
      "Mikasa Ackerman",
    ],
    answer: "Eren Yeager",
  },
  {
    id: 15,
    category: "Attack on Titan",
    question:
      "Which Survey Corps member is known for intensely scientific curiosity?",
    options: ["Hange Zoë", "Erwin Smith", "Levi Ackerman", "Jean Kirstein"],
    answer: "Hange Zoë",
  },
  {
    id: 16,
    category: "Attack on Titan",
    question:
      "What is the Titan characteristic that humans target to kill them?",
    options: ["Nape of the neck", "Eyes", "Hands", "Feet"],
    answer: "Nape of the neck",
  },
  {
    id: 17,
    category: "Attack on Titan",
    question:
      "Who is the owner of the Beast Titan’s identity reveal that shocked Scout squads?",
    options: [
      "Zeke Yeager",
      "Reiner Braun",
      "Bertolt Hoover",
      "Porco Galliard",
    ],
    answer: "Zeke Yeager",
  },
  {
    id: 18,
    category: "Attack on Titan",
    question:
      "Which Titan is known for its armored skin that makes it extremely durable?",
    options: ["Armored Titan", "Colossal Titan", "Beast Titan", "Female Titan"],
    answer: "Armored Titan",
  },
  {
    id: 19,
    category: "Attack on Titan",
    question:
      "Who is the young recruit that became known for marksmanship and potato obsession?",
    options: ["Sasha Blouse", "Connie Springer", "Jean Kirstein", "Marco Bott"],
    answer: "Sasha Blouse",
  },
  {
    id: 20,
    category: "Attack on Titan",
    question:
      "What title is used for the elite soldiers who retake territory outside the walls?",
    options: ["Survey Corps", "Garrison", "Military Police", "Scouting Legion"],
    answer: "Survey Corps",
  },
  {
    id: 21,
    category: "Attack on Titan",
    question:
      "Which city serves as the central government location inside the walls?",
    options: ["Mitras", "Shiganshina", "Trost", "Ragako"],
    answer: "Mitras",
  },
  {
    id: 22,
    category: "Attack on Titan",
    question:
      "Who was known for the plan to retake Wall Maria and send a team through the breach?",
    options: ["Erwin Smith", "Hange Zoë", "Levi Ackerman", "Dot Pixis"],
    answer: "Erwin Smith",
  },
  {
    id: 23,
    category: "Attack on Titan",
    question:
      "Which Titan later reveals the ability to harden parts of its body as armor?",
    options: ["Armored Titan", "Colossal Titan", "Female Titan", "Cart Titan"],
    answer: "Armored Titan",
  },
  {
    id: 24,
    category: "Attack on Titan",
    question:
      "Which character’s flashback reveals a tragic childhood in the RBA mission?",
    options: [
      "Reiner Braun",
      "Bertolt Hoover",
      "Porco Galliard",
      "Zeke Yeager",
    ],
    answer: "Reiner Braun",
  },
  {
    id: 25,
    category: "Attack on Titan",
    question:
      "What is the name of the island-like land the Eldians lived on within the walls?",
    options: ["Paradise Island (Paradis)", "Marley", "Karanese", "Mare"],
    answer: "Paradise Island (Paradis)",
  },
  {
    id: 26,
    category: "Attack on Titan",
    question:
      "Which person becomes a key strategist and eventual leader of humanity’s forces?",
    options: ["Erwin Smith", "Hange Zoë", "Levi Ackerman", "Historia Reiss"],
    answer: "Erwin Smith",
  },
  {
    id: 27,
    category: "Attack on Titan",
    question:
      "Who was the childhood friend who ultimately becomes a Titan shifter and infiltrator?",
    options: ["Reiner Braun", "Bertolt Hoover", "Eren Yeager", "Jean Kirstein"],
    answer: "Reiner Braun",
  },
  {
    id: 28,
    category: "Attack on Titan",
    question:
      "What is the name of the architectural protective barriers built to keep Titans out?",
    options: ["Walls", "Fortresses", "Barricades", "Ringwalls"],
    answer: "Walls",
  },
  {
    id: 29,
    category: "Attack on Titan",
    question:
      "Which soldier famously led a suicide charge into Titan territory to save comrades?",
    options: ["Erwin Smith", "Levi Ackerman", "Hange Zoë", "Marcus"],
    answer: "Erwin Smith",
  },
  {
    id: 30,
    category: "Attack on Titan",
    question:
      "Which soldier had a living mind of tactical pragmatism and sacrificed himself in a charge?",
    options: ["Erwin Smith", "Levi Ackerman", "Hange Zoë", "Armin Arlert"],
    answer: "Erwin Smith",
  },
  {
    id: 31,
    category: "Attack on Titan",
    question:
      "Which Titan is associated with female-like agility and combat skills?",
    options: ["Female Titan", "Cart Titan", "Colossal Titan", "Beast Titan"],
    answer: "Female Titan",
  },
  {
    id: 32,
    category: "Attack on Titan",
    question:
      "Who grows into a leadership role and has tactically important ideas despite being physically weaker?",
    options: [
      "Armin Arlert",
      "Jean Kirstein",
      "Connie Springer",
      "Sasha Blouse",
    ],
    answer: "Armin Arlert",
  },
  {
    id: 33,
    category: "Attack on Titan",
    question:
      "Which Titan is primarily used as a long-distance artillery-like weapon by inheritors?",
    options: ["Colossal Titan", "Armored Titan", "Beast Titan", "Jaw Titan"],
    answer: "Colossal Titan",
  },
  {
    id: 34,
    category: "Attack on Titan",
    question:
      "Which group enforces law inside the walls and manages inner-city safety?",
    options: ["Garrison", "Survey Corps", "Military Police Brigade", "Scouts"],
    answer: "Garrison",
  },
  {
    id: 35,
    category: "Attack on Titan",
    question:
      "Which Titan is noted for a smaller stature and quick, jaw-based attacks?",
    options: ["Jaw Titan", "Colossal Titan", "Armored Titan", "Cart Titan"],
    answer: "Jaw Titan",
  },

  // --- Demon Slayer (36 - 60) ---
  {
    id: 36,
    category: "Demon Slayer",
    question: "What is Tanjiro Kamado’s primary breathing style?",
    options: [
      "Water Breathing",
      "Flame Breathing",
      "Thunder Breathing",
      "Wind Breathing",
    ],
    answer: "Water Breathing",
  },
  {
    id: 37,
    category: "Demon Slayer",
    question: "Who is Nezuko Kamado?",
    options: [
      "Tanjiro’s sister turned demon",
      "Tanjiro’s mother",
      "A Hashira",
      "A demon slayer ally",
    ],
    answer: "Tanjiro’s sister turned demon",
  },
  {
    id: 38,
    category: "Demon Slayer",
    question:
      "Which Hashira is known for insect-style techniques and poison knowledge?",
    options: [
      "Shinobu Kocho",
      "Kyojuro Rengoku",
      "Giyu Tomioka",
      "Mitsuri Kanroji",
    ],
    answer: "Shinobu Kocho",
  },
  {
    id: 39,
    category: "Demon Slayer",
    question: "Who is the Flame Hashira who appears in the Mugen Train arc?",
    options: [
      "Kyojuro Rengoku",
      "Tengen Uzui",
      "Sanemi Shinazugawa",
      "Gyomei Himejima",
    ],
    answer: "Kyojuro Rengoku",
  },
  {
    id: 40,
    category: "Demon Slayer",
    question:
      "Which character often sneezes and is known for extreme fearfulness but bursts of power?",
    options: [
      "Zenitsu Agatsuma",
      "Inosuke Hashibira",
      "Tanjiro Kamado",
      "Kanao Tsuyuri",
    ],
    answer: "Zenitsu Agatsuma",
  },
  {
    id: 41,
    category: "Demon Slayer",
    question: "What is Muzan Kibutsuji?",
    options: [
      "The first and most powerful demon",
      "A Hashira",
      "A demon slayer trainer",
      "A Breathing Style",
    ],
    answer: "The first and most powerful demon",
  },
  {
    id: 42,
    category: "Demon Slayer",
    question: "Which swordsman fights wearing a boar mask?",
    options: [
      "Inosuke Hashibira",
      "Zenitsu Agatsuma",
      "Tanjiro Kamado",
      "Tanjuro Kamado",
    ],
    answer: "Inosuke Hashibira",
  },
  {
    id: 43,
    category: "Demon Slayer",
    question: "What does the Demon Slayer Corps primarily do?",
    options: [
      "Hunt demons",
      "Conquer villages",
      "Train Hashira",
      "Guard the emperor",
    ],
    answer: "Hunt demons",
  },
  {
    id: 44,
    category: "Demon Slayer",
    question: "Which character is known for wielding Sound Breathing?",
    options: [
      "Tengen Uzui",
      "Zenitsu Agatsuma",
      "Kyojuro Rengoku",
      "Giyu Tomioka",
    ],
    answer: "Tengen Uzui",
  },
  {
    id: 45,
    category: "Demon Slayer",
    question: "Which of these is a defining feature of demons in the series?",
    options: [
      "They cannot be killed by fire",
      "They regenerate rapidly and crave human flesh",
      "They are immune to sunlight",
      "They are immortal to beheading",
    ],
    answer: "They regenerate rapidly and crave human flesh",
  },
  {
    id: 46,
    category: "Demon Slayer",
    question:
      "Which breathing style focuses on speed and electricity-based moves?",
    options: [
      "Thunder Breathing",
      "Water Breathing",
      "Flame Breathing",
      "Stone Breathing",
    ],
    answer: "Thunder Breathing",
  },
  {
    id: 47,
    category: "Demon Slayer",
    question:
      "Who trained Tanjiro to fight and gave him his hanafuda earrings backstory?",
    options: [
      "Sakonji Urokodaki",
      "Kyojuro Rengoku",
      "Muzan Kibutsuji",
      "Shinobu Kocho",
    ],
    answer: "Sakonji Urokodaki",
  },
  {
    id: 48,
    category: "Demon Slayer",
    question:
      "Which Demon Slayer member uses a sword with a black blade and water-like forms?",
    options: [
      "Giyu Tomioka",
      "Zenitsu Agatsuma",
      "Inosuke Hashibira",
      "Kanao Tsuyuri",
    ],
    answer: "Giyu Tomioka",
  },
  {
    id: 49,
    category: "Demon Slayer",
    question: "What transforms a person into a demon in the series?",
    options: [
      "A demon’s blood or being bitten",
      "A curse",
      "A chant",
      "A potion",
    ],
    answer: "A demon’s blood or being bitten",
  },
  {
    id: 50,
    category: "Demon Slayer",
    question:
      "Which Hashira is known for immense physical strength and prayerful disposition?",
    options: [
      "Gyomei Himejima",
      "Sanemi Shinazugawa",
      "Tengen Uzui",
      "Kyojuro Rengoku",
    ],
    answer: "Gyomei Himejima",
  },
  {
    id: 51,
    category: "Demon Slayer",
    question:
      "What is the name of the place where demons are often created and controlled by Muzan?",
    options: [
      "Mount Natagumo (and other lairs)",
      "Urokodaki’s temple",
      "Hashira mansion",
      "Flower district",
    ],
    answer: "Mount Natagumo (and other lairs)",
  },
  {
    id: 52,
    category: "Demon Slayer",
    question:
      "Which character uses Breath of the Sun related techniques historically?",
    options: [
      "Yoriichi Tsugikuni (Sun Breathing origin)",
      "Tanjiro Kamado",
      "Zenitsu Agatsuma",
      "Kanao Tsuyuri",
    ],
    answer: "Yoriichi Tsugikuni (Sun Breathing origin)",
  },
  {
    id: 53,
    category: "Demon Slayer",
    question:
      "Which supporting character often helps with healing and cures using herbal knowledge?",
    options: ["Tamayo", "Kanao Tsuyuri", "Shinobu Kocho", "Kanae Kocho"],
    answer: "Tamayo",
  },
  {
    id: 54,
    category: "Demon Slayer",
    question:
      "Which Demon Slayer is recognized by explosive theatrical armor and flashy style?",
    options: [
      "Tengen Uzui",
      "Zenitsu Agatsuma",
      "Inosuke Hashibira",
      "Kyojuro Rengoku",
    ],
    answer: "Tengen Uzui",
  },
  {
    id: 55,
    category: "Demon Slayer",
    question: "What is unique about Nezuko's state after becoming a demon?",
    options: [
      "She resists human-eating urge and sleeps instead of eating",
      "She goes blind",
      "She cannot transform",
      "She loses all memory",
    ],
    answer: "She resists human-eating urge and sleeps instead of eating",
  },
  {
    id: 56,
    category: "Demon Slayer",
    question:
      "Which Demon Slayer demonstrates exceptional observation and blade precision despite small size?",
    options: ["Shinobu Kocho", "Kanao Tsuyuri", "Nezuko Kamado", "Tamayo"],
    answer: "Shinobu Kocho",
  },
  {
    id: 57,
    category: "Demon Slayer",
    question:
      "Which demon is known as of the Upper Rank and posed a major threat in Mugen Train and Infinity Castle arcs?",
    options: [
      "Upper Rank One (Kokushibo or similar)",
      "Lower Rank Five",
      "Hand Demon",
      "Rengoku's foe",
    ],
    answer: "Upper Rank One (Kokushibo or similar)",
  },
  {
    id: 58,
    category: "Demon Slayer",
    question:
      "Who is the spirited swordsman who wields a pair of Nichirin swords and lives in the mountains?",
    options: [
      "Inosuke Hashibira",
      "Zenitsu Agatsuma",
      "Tanjiro Kamado",
      "Kyojuro Rengoku",
    ],
    answer: "Inosuke Hashibira",
  },
  {
    id: 59,
    category: "Demon Slayer",
    question:
      "Which breathing style emphasizes elegance, gentle movements, and breathing techniques evoking flowers?",
    options: [
      "Flower/Healing-influenced styles (Kanao/Kocho style)",
      "Flame Breathing",
      "Stone Breathing",
      "Thunder Breathing",
    ],
    answer: "Flower/Healing-influenced styles (Kanao/Kocho style)",
  },
  {
    id: 60,
    category: "Demon Slayer",
    question:
      "Which Demon Slayer appears with a gentle smile but deadly skill and uses insect motifs?",
    options: ["Shinobu Kocho", "Nezuko Kamado", "Tamayo", "Kanao Tsuyuri"],
    answer: "Shinobu Kocho",
  },

  // --- Naruto (61 - 70) ---
  {
    id: 61,
    category: "Naruto",
    question: "Who is Naruto Uzumaki’s rival turned friend?",
    options: [
      "Sasuke Uchiha",
      "Shikamaru Nara",
      "Hinata Hyuga",
      "Kakashi Hatake",
    ],
    answer: "Sasuke Uchiha",
  },
  {
    id: 62,
    category: "Naruto",
    question: "What is the name of Naruto’s signature clone technique?",
    options: [
      "Shadow Clone Jutsu (Kage Bunshin)",
      "Rasengan",
      "Chidori",
      "Fireball Jutsu",
    ],
    answer: "Shadow Clone Jutsu (Kage Bunshin)",
  },
  {
    id: 63,
    category: "Naruto",
    question:
      "Which group is the major antagonist organization hunting tails in Naruto Shippuden?",
    options: ["Akatsuki", "Orochimaru’s Army", "Hidden Sand", "Sound Village"],
    answer: "Akatsuki",
  },
  {
    id: 64,
    category: "Naruto",
    question: "Which clan is famous for Byakugan and gentle fist techniques?",
    options: ["Hyuga", "Uchiha", "Nara", "Akimichi"],
    answer: "Hyuga",
  },
  {
    id: 65,
    category: "Naruto",
    question: "Who becomes the Seventh Hokage?",
    options: ["Naruto Uzumaki", "Sasuke Uchiha", "Kakashi Hatake", "Tsunade"],
    answer: "Naruto Uzumaki",
  },
  {
    id: 66,
    category: "Naruto",
    question:
      "Which teacher is known for the mask and leadership of Team 7 originally?",
    options: ["Kakashi Hatake", "Iruka Umino", "Jiraiya", "Tsunade"],
    answer: "Kakashi Hatake",
  },
  {
    id: 67,
    category: "Naruto",
    question:
      "Which technique involves a spiraling ball of wind chakra invented by the Fourth Hokage?",
    options: ["Rasengan", "Chidori", "Fireball Jutsu", "Amaterasu"],
    answer: "Rasengan",
  },
  {
    id: 68,
    category: "Naruto",
    question: "Who is Naruto’s teacher and mentor known as the Toad Sage?",
    options: ["Jiraiya", "Orochimaru", "Kakashi", "Itachi"],
    answer: "Jiraiya",
  },
  {
    id: 69,
    category: "Naruto",
    question: "Which clan acquired the Sharingan kekkei genkai?",
    options: ["Uchiha", "Hyuga", "Senju", "Akimichi"],
    answer: "Uchiha",
  },
  {
    id: 70,
    category: "Naruto",
    question: "What is the name of Naruto’s son in Boruto?",
    options: ["Boruto Uzumaki", "Sarada Uchiha", "Mitsuki", "Himawari Uzumaki"],
    answer: "Boruto Uzumaki",
  },

  // --- One Piece (71 - 80) ---
  {
    id: 71,
    category: "One Piece",
    question: "What is Monkey D. Luffy’s ultimate dream?",
    options: [
      "To become the Pirate King",
      "To become a samurai",
      "To be the World’s Strongest Soldier",
      "To build the largest ship",
    ],
    answer: "To become the Pirate King",
  },
  {
    id: 72,
    category: "One Piece",
    question:
      "What is the name of Luffy’s signature attack created from his rubber body?",
    options: [
      "Gum-Gum Rocket (Gomu Gomu no...)",
      "Rasengan",
      "Spirit Bomb",
      "Chidori",
    ],
    answer: "Gum-Gum Rocket (Gomu Gomu no...)",
  },
  {
    id: 73,
    category: "One Piece",
    question: "Who is the Straw Hat crew’s navigator?",
    options: ["Nami", "Robin", "Franky", "Usopp"],
    answer: "Nami",
  },
  {
    id: 74,
    category: "One Piece",
    question: "Which island is Luffy from?",
    options: [
      "Foosha Village in East Blue",
      "Water 7",
      "Alabasta",
      "Sabaody Archipelago",
    ],
    answer: "Foosha Village in East Blue",
  },
  {
    id: 75,
    category: "One Piece",
    question:
      "Which crew member cooks and is known for his kick-based fighting style?",
    options: ["Sanji", "Zoro", "Usopp", "Chopper"],
    answer: "Sanji",
  },
  {
    id: 76,
    category: "One Piece",
    question:
      "What is the name of the world’s map-spanning treasure Luffy seeks?",
    options: ["One Piece", "All Blue", "Poneglyph", "Four Seas"],
    answer: "One Piece",
  },
  {
    id: 77,
    category: "One Piece",
    question: "Who is the swordsman of the Straw Hat crew?",
    options: ["Zoro", "Sanji", "Franky", "Brook"],
    answer: "Zoro",
  },
  {
    id: 78,
    category: "One Piece",
    question: "Which Devil Fruit gives a user rubber properties?",
    options: [
      "Gomu Gomu no Mi",
      "Mera Mera no Mi",
      "Ope Ope no Mi",
      "Hito Hito no Mi",
    ],
    answer: "Gomu Gomu no Mi",
  },
  {
    id: 79,
    category: "One Piece",
    question: "Which member acts as the doctor of the Straw Hat crew?",
    options: ["Tony Tony Chopper", "Franky", "Brook", "Usopp"],
    answer: "Tony Tony Chopper",
  },
  {
    id: 80,
    category: "One Piece",
    question: "What is the primary means of travel for pirates in One Piece?",
    options: ["Ships", "Airplanes", "Trains", "Teleportation"],
    answer: "Ships",
  },
];

export default animeQuestions;
