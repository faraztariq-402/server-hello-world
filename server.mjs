console.log("this is express server hello world");
import express from 'express';
import cors from 'cors'
import path  from 'path';
const __dirname = path.resolve();
const app = express()
app.use(cors())
// const PORT = 3000

app.get('/profile', (req, res) => {
  res.send('This is Faraz Profile! ' + new Date())
})
app.get('/weather/:CityName', (req, res) => {
  let weatherData = {
    karachi: {
      city: "Karachi",
      tempInC: 34,
      humdidity: 50,
      high: 36,
      low: 30
    },
    Melbourne: {
      city: "Melbourne",
      tempInC: 22,
      humdidity: 40,
      high: 24,
      low: 17
    }
  }
  let userInputCity = req.params.CityName.toLowerCase();
  console.log(userInputCity)
    let weatherDataToSend = weatherData[userInputCity]
    if(weatherDataToSend){
      res.send(weatherDataToSend)
    }
else{
  res.status(404).send(`${req.params.CityName} is not available in our data list`);
}
})
app.use(express.static(path.join(__dirname, 'public')))
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})