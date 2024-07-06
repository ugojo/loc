const axios = require('axios');





const getInfo = async(req, res)=> {
    visitor = req.query.visitor_name

    // const ipInfo = req.ipInfo

    // const ips = req.headers['x-forwarded-for'] || req.socket.remoteAddress
    const xForwardedFor = req.headers['x-forwarded-for']; 
    const clientIp = xForwardedFor ? xForwardedFor.split(',')[0] : req.connection.remoteAddress;

    try {
        // const ip = await axios.get('https://api.ipify.org?format=json')
        const userIp = await axios.get(`http://ipinfo.io/${clientIp}/json?token=${process.env.TOKEN}`)
        const {country, region} = userIp.data
        const [latitude, longitude] = userIp.data.loc.split(',')

        const temps = await axios.get(`http://api.openweathermap.org/data/2.5/weather?` 
			+`lat=${latitude}&lon=${longitude}&appid=${process.env.API_KEY}`)
        
        const temp = temps.data.main.temp

        res.status(200).json({"client_ip": clientIp,
                  "location": region ,
                  "greeting":  `Hello,${visitor}!, the temperature is ${temp} degrees celcius in ${region}`
        })

        // console.log(userIp.data, region);
    } catch (error) {
       return res.status(400).json({'error': error.message})
    }
}

module.exports = getInfo