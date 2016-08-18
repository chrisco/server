var express = require('express');
var router = express.Router();
var knex = require('../../../db/knex');
var db = require('../../../db/api');

/* GET all categories. */
router.get('/', function(req, res, next) {
	db.getAllCategories()
		.then(function(categories) {
			res.json({
				categories: categories
			});
		});
});

/* GET category by id.*/
router.get('/:id', function(req, res, next) {
  db.getCategoryById(req.params.id)
  .then(function (category) {
    res.json({
      category: category
    });
  });
});

module.exports = router;
