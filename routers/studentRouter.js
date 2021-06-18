const StudentController = require('../controllers/studentsController')

const router = require('express').Router()

router.get('/', StudentController.home)
router.get('/add', StudentController.formAddStudent)
router.post('/add', StudentController.addStudent)
router.get('/edit/:id', StudentController.updateStudentForm)
router.post('/edit/:id', StudentController.updateStudentAction)
router.get('/delete/:id', StudentController.deleteStudent)


module.exports = router