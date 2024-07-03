var satelize = require('satelize');
// const ip = require('ip')


const getInfo = async (req, res)=>{
    const ipInfo= req.ipInfo

    await satelize.satelize({ip: ipInfo}, function(err, payload) {

        // console.log(payload);
        // console.log(ipInfo);
         res.json({'payload': payload})
      });

}


module.exports = getInfo