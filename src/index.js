const express = require('express');
const axios = require('axios');
const app = express();

app.get('/', (req, res) => {
    res.send('welcome');
});

app.get('/api/weather/:cc/:city', (req, res) => {
    const {cc, city} = req.params;
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${cc}&APPID=3ad2909b326ee87242f4ce1c70aae3b0`)
    .then(response => {
        res.send(response.data);
    })
    .catch(err => console.log(err));
});

app.listen(3000, () => console.log('app listen on port 3000'));
