const axios = require('axios')
// const ip = require('ip')

const url = 'https://ipapi.co/json/'

const getInfo = async (req, res)=>{

    visitor = req.query.visitor_name

    await axios 
     .get(url)
    .then((response)=>{
       const data = response.data

       console.log(response.data);

        res.status(200).json({"client_ip": data.ip,
                              "location": data.country_name,
                              "greeting": "Hello," + visitor + "! the temperature is 11 degees Celcius in " + data.country_name
        })
    })
    .catch(err=>{
        console.log({'error': err});
    })

}


module.exports = getInfo