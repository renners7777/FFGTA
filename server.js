const express = require("express")
const app = express()
const cors = require("cors")
const PORT = process.env.PORT || 3000

app.use(cors())

const aliens = {
  "humans": {
    'speciesName': 'Humans',
    'homeWorld': 'Earth',
    'features': "Rounded ears, hair on head and face (sometimes)",
    'interestingFact':
      "Founded the United Federation of Planets after first contact with the Vulcans",
    'notableExamples': "James T. Kirk, Zephram Cochran, Abraham Lincoln",
    'image': 'https://static.wikia.nocookie.net/aliens/images/6/68/The_City_on_the_Edge_of_Forever.jpg'
  },
  'vulcans': {
    'speciesName': 'Vulcans',
    'homeWorld': 'Vulcan',
    'features': "Pointed ears, upward-curving eyebrows",
    'interestingFact':
      "Practice an extreme form of emotional regulation that focuses on logic above all else, pioneered by a Vulcan named Surak",
    'notableExamples': "Spock, T'Pol, Sarek",
    'image': 'https://static.wikia.nocookie.net/aliens/images/7/75/Vulcans-FirstContact.jpg'
  },
  'klingons': {
    'speciesName': 'Klingons',
    'homeWorld': "Qo'nos",
    'features': "Large stature, pronounced ridges on the forehead",
    'interestingFact':
      "Highly skilled in weapons and battle. Their facial ridges were lost as the result of a virus in 2154, but were subsequently restored by 2269.",
    'notableExamples': "Worf, Kor, Kang",
    'image': "https://static.wikia.nocookie.net/aliens/images/7/74/Kruge.jpg"
  },
  'romulans': {
    'speciesName': 'Romulans',
    'homeWorld': "Romulus",
    'features': "Pointed ears, upward-curving eyebrows,green tinge to the skin, diagonal smooth forehead ridges (sometimes)",
    'interestingFact':
      "Share a common ancestory with Vulcans, though none of the emotional discipline. Romulus has a sister planet, Remus, on which the Remans are seen as lesser beings.",
    'notableExamples': "Pardek, Tal'aura, Narissa",
    'image': "https://static.wikia.nocookie.net/aliens/images/1/1d/Zzzd7.jpg"
  },
  'gorn': {
    'speciesName': 'Gorn',
    'homeWorld': "unknown (?)",
    'features': "Clear, sharp-looking eyes",
    'interestingFact':
    "Practice an extreme form of emotional regulation that focuses on logic above all else, pioneered by a Gorn named Guristas",
    'notableExamples': "Gorn Captain",
    'image': "https://static.wikia.nocookie.net/aliens/images/9/9b/Gorn.jpg"
  },
  'borg': {
    'speciesName': "(The) Borg",
    'homeWorld': "unknown (Delta Quadrant)",
    'features':
      "pale skin, numerous interior and exterior biological modifications",
    'interestingFact':
      'No single genetic lingeage, species propagates by assimilating individuals via nanotechnology, led by a hive mind guided by a single "queen" individual. DO NOT APPROACH unless under specific diplomatic orders from Starfleet Command.',
    'notableExamples': "Borg Queen, Seven of Nine, Locutus",
    'image': "https://static.wikia.nocookie.net/aliens/images/7/76/Borg.jpg"
  },
  'trill': {
    'speciesName': "Trill",
    'homeworld': "Trill",
    'features':
      "Outward appearance similar to humans, aside from distinct dark pigment marks running symmetrically down both sides of the face and body",
    'interestingFact':
      "Some Trill are willin hosts to a long-lived invertibrate symbiote that merges with the host to create a distinct personality.",
    'notableExamples': "Jadzia Dax, Ezri Dax, Curzon Dax",
    'image': "https://static.wikia.nocookie.net/aliens/images/4/42/EzriDax.jpg"
  }
}

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html")
})


app.get("/api/:alienName", (request, response) => {
  const aliensName = request.params.alienName.toLowerCase()
  if (aliens[aliensName]) {
    response.json(aliens[aliensName])
  } else {
    response.json(aliens["humans"])
  }
})

app.listen(process.env.PORT || 3000, () => {
  console.log(`The server is running on port ${PORT}.`)
})
