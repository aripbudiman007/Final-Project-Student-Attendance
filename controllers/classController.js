const { Class } = require('../models')
class ClassController{
    static showAllClass(req, res) {
        Class.findAll()
        .then(result => {
            res.render('./classes/home', {data : result})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static addClass(req, res){
        const { className } = req.body

        Class.create({className})
        .then(() => {
            res.redirect('/class')
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = ClassController