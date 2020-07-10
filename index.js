const express = require('express');
const app = express();
const PORT = 3000

const weatherDoc =  require('./weather.json');

app.get('/', (req, res) => {
    let weatherDocTemp = weatherDoc['wx:weatherDataResponse']['wx:locationResponseList']['wx:locationResponse']['wx:temperatureList']['wx:values']['_text'];
    let weatherDocDegree = weatherDoc['wx:weatherDataResponse']['wx:locationResponseList']['wx:locationResponse']['wx:temperatureList']['wx:uom']['_text'];

    res.send(`Today's Current Hourly Temp: ` + weatherDocTemp + '°' + weatherDocDegree);
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
}) ;