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

    static updateClassForm(req,res){
        const {id} = req.params
        Class.findOne({
            where:{
                id:+id
            },
          returning:true
        })
        .then(result => {
            res.render('./classes/formUpdateClass',{kelas:result})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static updateClassAction(req, res) {
        const { id } = req.params;
        const { className } = req.body
        Class.update({ className },{
          where:{
            id:+id
          },
          returning:true
        })
          .then((result) => {
            const kelas = result[1][0]
            let notif = `Berhasil mengupdate class dengan id : ${kelas.id}`;
            res.redirect(`/class/?notif=${notif}`);
          })
          .catch((err) => {
            res.send(err);
          });
      }

      static deleteClass(req, res) {
        const { id } = req.params;
        Class.destroy({
          where:{
            id:+id
          }
        })
          .then((result) => {
            let notif = `Berhasil menghapus class dengan id : ${id}`;
            res.redirect(`/class/?notif=${notif}`);
          })
          .catch((err) => {
            res.send(err);
          });
      }
}

module.exports = ClassController