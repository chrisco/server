var express = require('express');
var router = express.Router();
var knex = require('../../../db/knex');
var db = require('../../../db/api');

/* GET all resources. */
router.get('/', function(req, res, next) {
	db.getAllResources()
		.then(function(resources) {
			res.json({
				resources: resources
			});
		});
});

/* GET all resources in a given category. */
router.get('/categories/:category', function(req, res, next) {
	db.getAllResourcesInCategory(req.params.category)
		.then(function(resources) {
			res.json({
				resources: resources
			});
		})
		.catch(function(err) {
			console.log(err);
		});
});

/* GET a resource by its id. */
router.get('/:id', function(req, res, next) {
	db.getResourceById(req.params.id)
		.then(function(resource) {
			res.json({
				resource: resource
			});
		});
});

module.exports = router;
