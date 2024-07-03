const express = require('express')
const ip = require('ip')

const router = express.Router()


router.get('/',(req, res)=>{
    const ipAddress = ip.address()
    const ipInfo = req.ipInfo
    const name = req.query

    res.status(200).json({'client_ip': ipInfo.ip, 
              'location': ipInfo.Country,
              'greeting': `Hello, ${name}!,the temperature is 11 degrees celcius in ${ip.country}`
     })

    // console.log({'IP' : ipInfo});
    // console.log({'vistor name': name});
    // console.log({'Ip address': ipInfo});
    // console.log({'Ip Conutry': ip.country});
})

module.exports = router
