const personController = require('../../controllers').personController;
const router = require('express').Router();

router.get('/', personController.index);
router.get('/new/:name', personController.create);
router.get('/remove/:name', personController.destroy);
router.get('/:name', personController.show);

module.exports = router;


