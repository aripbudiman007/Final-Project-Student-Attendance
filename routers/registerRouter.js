const RegisterController = require('../controllers/registerController')

const router = require('express').Router()

router.get('/', RegisterController.formRegister)
router.post('/', RegisterController.register)
module.exports = router