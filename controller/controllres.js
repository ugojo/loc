const axios = require('axios')

// const ip = require('ip')
// var url_one = `http://api.openweathermap.org/data/2.5/weather?` 
// 			+`lat=${latitude}&lon=${longitude}&appid=${process.env.API_KEY}` 
const URL="https://ipapi.co/json/"


const getTemp = (latitude, longitude)=>{

   return axios .get(`http://api.openweathermap.org/data/2.5/weather?` 
       +`lat=${latitude}&lon=${longitude}&appid=${process.env.API_KEY}`)
      .then((response)=>{
           response.data
      })
      .catch((err)=>{
          console.log({'error': err});
      })

}
const getInfo = async (req, res)=>{

    visitor = req.query.visitor_name

    await axios 
     .get(URL)
    .then((response)=>{
       const data = response.data

       axios .get(`http://api.openweathermap.org/data/2.5/weather?` 
        +`lat=${latitude}&lon=${longitude}&appid=${process.env.API_KEY}`)
       .then((response)=>{
            response.data
       })
        res.status(200).json(allData)
    })
    .catch(err=>{
        console.log({'error': err});
    })

}


module.exports = getInfo