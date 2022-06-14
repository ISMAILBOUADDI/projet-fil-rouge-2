const router = require('express').Router()
// const auth = require('../middleware/auth')
// const authAdmin = require('../middleware/authAdmin')
const uploadCtrl = require('../controllers/uploadController')

// Upload image only admin can use
router.post('/upload',uploadCtrl.uploadeImages)

// Delete image only admin can use
router.post('/destroy',uploadCtrl.deleteImages)

module.exports = router