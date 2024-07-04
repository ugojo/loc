const axios = require('axios');
const ip = require('ip')


const URL="https://ipapi.co/json/"

const getInfo = async(req, res)=> {
    visitor = req.query.visitor_name

    // const ipInfo = req.ipInfo

    // const ips = req.headers['x-forwarded-for'] || req.socket.remoteAddress

    try {
        // const ip = await axios.get('https://api.ipify.org?format=json')
        const userIp = await axios.get(`http://ipinfo.io/json?token=${process.env.TOKEN}`)
        const {ip, country, region} = userIp.data
        const [latitude, longitude] = userIp.data.loc.split(',')

        const temps = await axios.get(`http://api.openweathermap.org/data/2.5/weather?` 
			+`lat=${latitude}&lon=${longitude}&appid=${process.env.API_KEY}`)
        
        const temp = temps.data.main.temp

        res.status(200).json({"client_ip": ip,
                  "location": region ,
                  "Cont": country,
                  "greeting":  `Hello,${visitor}!, the temperature is ${temp} degrees celcius in ${region}`
        })

        // console.log(userIp.data, region);
    } catch (error) {
       return res.status(400).json({'error': error.message})
    }
}

module.exports = getInfo