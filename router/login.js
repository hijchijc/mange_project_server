const express = require('express')
const router = express.Router()

const login_handler = require('../router_handler/login')

router.post('/login', login_handler.login)

module.exports = router