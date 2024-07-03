var satelize = require('satelize');
// const ip = require('ip')


const getInfo = async (req, res)=>{

    await satelize.satelize({ip: req.ip}, function(err, payload) {

        console.log(payload);
         res.json({'payload': payload})
      });

}


module.exports = getInfo