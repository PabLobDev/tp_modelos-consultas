const express = require('express');
const router = express.Router();
const {list,nueva,recommended,detail,add,create,edit,update,erase,remove} = require('../controllers/moviesController');

router
    .get('/movies', list)
    .get('/movies/new', nueva)
    .get('/movies/recommended', recommended)
    .get('/movies/detail/:id', detail)

    .get('/add', add)
    .post('/add', create)
    .get('/edit/:id', edit)
    .put('/edit/:id', update)
    .get('/delete/:id', erase)
    .delete('/delete/:id', remove)

module.exports = router;
