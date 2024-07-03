const express = require('express')
const ip = require('ip')
const getInfo = require('../controller/controller')

const router = express.Router()


router.get('/', getInfo)

module.exports = router
