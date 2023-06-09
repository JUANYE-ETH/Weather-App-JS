document.getElementById('fetchWeather').addEventListener('click', async () => {
    const city = document.getElementById('city').value;
    const url = `/api/weather?city=${city}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        const fahrenheit = data.main.temp.toFixed(1);
        const celsius = ((fahrenheit - 32) * (5 / 9)).toFixed(1);
        const weatherInfo = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>${data.weather[0].main}</p>
            <p>Temperature: ${fahrenheit}°F (${celsius}°C)</p>
            <p>Humidity: ${data.main.humidity}%</p>
        `;
    document.getElementById('weatherInfo').innerHTML = weatherInfo;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
});