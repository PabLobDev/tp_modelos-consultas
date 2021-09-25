const {body} = require('express-validator');

module.exports = [
    body('title')
    .notEmpty().withMessage('El título es obligatorio'),

    body('rating')
    .notEmpty().withMessage('El rating es obligatorio'),

    body('awards')
    .notEmpty().withMessage('Debe poner un número'),

    body('release_date')
    .notEmpty().withMessage('Indica una fecha'),
    
    body('length')
    .notEmpty().withMessage('Indica la duración')
    
]