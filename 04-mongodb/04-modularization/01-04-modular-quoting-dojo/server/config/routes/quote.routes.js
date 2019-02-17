var quoteController = require('../../controllers').quoteController;
const router = require('express').Router();

router.get('/', quoteController.index);
router.post('/quotes', quoteController.create);
router.get('/quotes', quoteController.show);

module.exports = router;





// var quoteController = require('../controllers/quotes');

// module.exports = function(app) {
//   app.get('/', quoteController.index);
//   app.post('/quotes', quoteController.create);
//   app.get('/quotes', quoteController.show);
// }
