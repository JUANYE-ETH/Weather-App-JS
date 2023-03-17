const axios = require('axios');

module.exports = async (req, res) => {
    const city = req.query.city;
    const apiKey = process.env.OPEN_WEATHER_API_KEY;

    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`);
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
        res.status(500).json({ error: error.message });
    }
};