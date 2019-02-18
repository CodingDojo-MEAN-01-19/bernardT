var rabbitController = require('../../controllers').rabbitController;
const router = require('express').Router();

router.get('/', rabbitController.index);
router.get('/new', rabbitController.new);
router.post('/', rabbitController.create);
router.get('/show/:id', rabbitController.show);
router.get('/edit/:id', rabbitController.edit);
router.post('/update/:id', rabbitController.update);
router.get('/destroy/:id', rabbitController.destroy);

module.exports = router;





// var quoteController = require('../controllers/quotes');

// module.exports = function(app) {
//   app.get('/', quoteController.index);
//   app.post('/quotes', quoteController.create);
//   app.get('/quotes', quoteController.show);
// }
