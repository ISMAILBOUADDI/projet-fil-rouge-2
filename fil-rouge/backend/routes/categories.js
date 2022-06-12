const express = require('express')

const addCategory = require('../controllers/categoryController') 


const router = express.Router()

router.post('/create',addCategory.createCategory)

module.exports = router