const express = require('express')
const router = express.Router()

const category_handler = require('../router_handler/category')

router.get('/list', category_handler.reqList)
router.post('/add', category_handler.addList)
router.post('/update', category_handler.updateList)

module.exports = router