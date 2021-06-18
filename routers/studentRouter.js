const StudentController = require('../controllers/studentsController')

const router = require('express').Router()

router.get('/', StudentController.home)
router.get('/add', StudentController.formAddStudent)
router.post('/add', StudentController.addStudent)

module.exports = router