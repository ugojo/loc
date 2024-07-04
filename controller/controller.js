const axios = require('axios');


// const ip = require('ip')
const URL="https://ipapi.co/json/"

async function getInfo(req, res) {
    visitor = req.query.visitor_name

    try {
        const userIp = await axios.get(URL);

        const {ip, currency, region, latitude, longitude} = userIp.data

        const temps = await axios.get(`http://api.openweathermap.org/data/2.5/weather?` 
			+`lat=${latitude}&lon=${longitude}&appid=${process.env.API_KEY}`)
        
        const temp = temps.data.main.temp

        res.json({"client_ip": ip,
                  "location": region,
                  "greeting":  `Hello,${visitor}!, the temperature is ${temp} degrees celcius in ${region}`
        })

        // console.log(userIp.data, currency, region);
    } catch (error) {
        console.log(error);
    }
}

module.exports = getInfo