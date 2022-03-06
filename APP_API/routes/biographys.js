var express = require('express');
var router = express.Router();

const ctrlBiography = require('../controllers/biography');

router.route('/biographys')
    .get(ctrlBiography.getBiographys)
    .post(ctrlBiography.createBiography)

router.route('/biographys/:biographyid')
    .get(ctrlBiography.getSingleBiography)
    .put(ctrlBiography.updateBiography)
    .delete(ctrlBiography.deleteBiography)

module.exports = router;