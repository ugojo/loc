const express = require('express')

const router = express.Router()


router.get('/',(req, res)=>{
    const ipInfo = req.ipInfo
    const name = req.query

    res.status(200).json({'client_ip': ipInfo.ip, 
              'location': ipInfo.country,
              'greeting': `Hello, ${name}!,the temperature is 11 degrees celcius in ${ipInfo.country}`
     })

    // console.log({'IP' : ipInfo});
    // console.log({'vistor name': name});
})

module.exports = router
