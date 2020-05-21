exports.gamesByGenera = {
  Action : [
    {"Spider-Man" : 58134}, //[22508,58812,29338,254542,37357,7689,274480,3556,39,1438,59632,421698]
    {"Grand Theft Auto V" : 3498}, 
    {"Final Fantasy VII" : 259801},
    {"Overwatch" : 22508},
    {"Nioh" : 401},
    {"Sekiro: Shadows Die Twice" : 2489},
    {"Dead Cells" : 11726},
    {"Control"  : 58812},
    {"God Of War" : 29179},
    {"Days Gone" : 29338},
  ],
  Adventure : [
    {"Uncharted 4": 4475}, 
    {"The Witcher III - The Wild Hunt" : 3328}, 
    {"Horizon Zero  Dawn" : 254542},
    {"Borderlands 3" : 58617},
    {"The Legend of Zelda: Breath of the Wild" : 22511},
    {"Fortnite": 28131}, 
    {"Marvel Ultimate Alliance" : 37357},
    {"The Elder Scrolls V: Skyrim" : 5679},
    {"Dragon Quest XI" : 58084},
    {"Rise of the Tomb Rider" : 7689},
  ],
  Family : [
    {"Minecraft" : 22509},
    {"Super Mario Odyssey" : 59632},
    {"Rocket League" : 3272},
    {"Super Smash Bros. Ultimate" : 23763}, 
    {"Yoshi's Crafted World" : 27989},
    {"Stardew Valley" : 257201},
    {"Mario Tennis Aces" : 51609},
    {"Mario Kart 8 Deluxe"  : 23165},
    {"Splatoon 2" : 28024},
    {"Animal Crossing New Horizons" : 421698},
    {"Little Big Planet 3"  : 3501},
    {"Lego Dimensions" : 27988},
  ],
  Horror : [
    {"Doom" : 2454},
    {"Doom Eternal" : 58777},
    {"Resident Evil 7" : 480},
    {"Mortal Kombat 11" : 274480},
    {"Amnesia: The Dark Descent" : 13668},
    {"The Evil Within" : 3554},
    {"Prey" : 39},
    {"Soma" : 3168},
    {"Until Dawn" : 3209},
    {"Alien Isolation" : 3556},
  ],
  Mystery : [
    {"Death Stranding" : 50738},
    {"Star Wars Jedi: Fallen Order": 257201},
    {"Luigi's Mansion 3" : 236697}, 
    {"Bayonetta 2" : 23760}, 
    {"Hollow Knight" : 9767},
    {"Bloodstained: Ritual of the Night" : 61176},
    {"L.A. Noire" : 4514},
    {"Sherlock Holmes: The Devil's Daugther" : 965},
    {"The Shapeshifting Detective" : 244806},
    {"The Sinking City" : 58811},
    {"Firewatch" : 2819},
  ],
  Romance : [
    {"Persona 5" : 49},
    {"Dragon's Dogma" : 4297},
    {"Alone with You" : 1438},
    {"Arcade Spirits" : 60632},
    {"Divinity Orginal Sin II" : 10073},
    {"Steins;Gate" : 13513},
    {"Mass Effect: Andromeda" : 137},
    {"Pillars of Eternity" : 15829},
    {"GreedFall" : 295019},
    {"Song of Unleash" : 368668},

  ],
  Thriller : [
    {"The Last of US" : 3990},
    {"Bloodborne" : 3387},
    {"Dark Souls III" : 2551},
    {"Hellblade: Senua's Sacrifice" : 12536},
    {"Astral Chain" : 292843}, 
    {"Diablo III" : 23600},
    {"Wolfenstein The New Colossus" : 28202},
    {"Nier:Automata" : 10141},
    {"Mass Effect Andromeda" : 137},
    {"Assassin's Creed Oddysey" : 58616},
    {"Fire Emblem The Three Houses" : 246478},

  ],
  Western : [
    {"Red Dead Redemption II" : 28},
    {"Red Dead Revolver"  : 1115},
    {"SteamWorld Dig"  : 3748},
    {"Secret Ponchos"  : 3485},
    {"El Hijo" : 64865},
    {"Wild Guns Reloaded" : 617},
    {"West of Dead" : 391395},
    {"Little Town Hero"  : 371834},
    {"Red Dead Redemption"  : 4544},
  ],
}

exports.weathers = {
  "Mist" : ["Western","Thriller", "Mystery","Family"],
  "Smoke" : ["Horror", "Action","Adventure","Family"],
  "Haze" : ["Western","Action","Thriller", "Mystery"],
  "Dust" : ["Western","Thriller", "Mystery"],
  "Fog" : ["Horror", "Thriller","Romance","Action"],
  "Sand" : ["Western","Thriller", "Mystery","Family"],
  "Ash" : ["Western","Thriller", "Mystery", "Horror"],
  "Squall" : ["Western","Action","Adventure","Horror"],
  "Tornado" : ["Western","Action","Adventure","Horror"],
  "Snow" : ["Family","Adventure","Romance","Action"],
  "Rain" : ["Romance", "Family","Mystery","Thriller"],
  "Drizzle" : ["Romance", "Family","Mystery","Thriller"],
  "Thunderstorm" : ["Action", "Adventure","Romance","Horror"],
  "Clear" : ["Action", "Family","Adventure"],
  "Clouds" : ["Mystery","Romance","Thriller","Western"],
}


// let vgGeneres = ["Action", "Indie", "Adventure", "RPG", "Strategy", 
//                   "Shooter", "Casual", "Simulation", "Puzzle", "Arcade", 
//                   "Platformer", "Racing", "Sports", "Massively Multiplayer", 
//                   "Family", "Fighting", "Board Games", "Educational", "Card"]


