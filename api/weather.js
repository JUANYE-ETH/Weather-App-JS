const fetch = require('node-fetch');

module.exports = async (req, res) => {
    const city = req.query.city;
    const apiKey = process.env.OPEN_WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

    if (response.ok) {
        res.status(200).json(data);
    } else {
        res.status(response.status).json(data);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
