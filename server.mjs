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
      image: "Sunny",
      humidity: 50,
       wind: "4.6km/h"
    },
    melbourne: {
      city: "Melbourne",
      tempInC: 22,
      image: "Broken Clouds",
      humidity: 40,
      wind: "3.6km/h"
    },
    lahore: {
      city: "Lahore",
      tempInC: 32,
      image: "Sunny",
      humidity: 45,
       wind: "3.2km/h"
    },
    quetta: {
      city: "Quetta",
      tempInC: 22,
      image: "Broken Clouds",
      humidity: 38,
       wind: "2.5km/h"
    },
    multan: {
      city: "Multan",
      tempInC: 34,
      image: "Rain Showers",
      humidity: 50,
     wind: "3.9km/h"
    },
    peshawar: {
      city: "Peshawar",
      tempInC: 35,
      image: "Sunny",
      humidity: 45,
       wind: "5.2km/h"
    },
    london: {
      city: "London",
      tempInC: 17,
      image: "Broken Clouds",
      humidity: 30,
     wind: "5.4km/h"
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