const db = require('../database/models')

module.exports = {
    list : (req,res) => {
        db.Pelicula.findAll()
            .then(movies => {
                res.render("moviesList",{movies})
            })
            .catch(error => console.log(error))
    },

    nueva: (req,res) => {
        db.Pelicula.findAll({
            order: [['release_date', 'DESC']]
        })
        .then(movies => {
            res.render("newestMovies",{movies})
        })
        .catch(error => console.log(error))

    },
    recommended: (req,res) => {
        db.Pelicula.findAll({
            where: {
                release_date: {[db.Sequelize.Op.gte] : 2008} 
            },
            order: [['rating', 'DESC']],
            limit:5
        })
        .then(movies => {
            res.render("recommendedMovies",{movies})
        })
        .catch(error => console.log(error))

    },
    detail: (req,res) => {
        db.Pelicula.findByPk(req.params.id).then(movie =>{
            res.render('moviesDetail', {
                movie
            } )
          })
          .catch(error => console.log(error))
    },

}