// console.log("this is express server hello world");
import express from "express";
import cors from "cors";
import path from "path";


const __dirname = path.resolve();
const app = express()
app.use(cors())
// const PORT = 3000

app.get('/weather/:city', (req, res) => {
  let weatherData = {
    karachi: {
      city: "Karachi",
      tempInC: 34,
      humdidity: 50,
      high: 36,
      low: 30
    },
    melbourne: {
      city: "Melbourne",
      tempInC: 22,
      humdidity: 40,
      high: 24,
      low: 17
    },
    lahore: {
      city: "Lahore",
      tempInC: 32,
      humdidity: 45,
      high: 38,
      low: 29
    },
    quetta: {
      city: "Quetta",
      tempInC: 22,
      humdidity: 38,
      high: 24,
      low: 18
    },
    multan: {
      city: "Multan",
      tempInC: 34,
      humdidity: 50,
      high: 40,
      low: 33
    },
    peshawar: {
      city: "Peshawar",
      tempInC: 35,
      humdidity: 45,
      high: 39,
      low: 32
    },
    london: {
      city: "London",
      tempInC: 17,
      humdidity: 30,
      high: 19,
      low: 12
    }
  };
  let userInputCity = req.params.city.toLowerCase();

  let weatherDataToSend = weatherData[userInputCity]
  if (weatherDataToSend) {
    res.send(weatherDataToSend)
  }
  else {
    res.status(404).send(`${req.params.city} is not available in our data list`);
    console.log(req.params.city)
  }
})

app.use(express.static(path.join(__dirname, 'public')))
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})