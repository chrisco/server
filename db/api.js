var knex = require('./knex');

module.exports = {

	getAllResources: function() {
		return knex('resource').select();
	},

	getResourceById: function(id) {
		return knex('resource').where({
			id: id
		}).first();
	},

	getAllResourcesInCategory: function(category) {
		return knex('resource').select('resource.id as resourceId', 'category_id', 'type_id', 'person_id', 'title', 'image_url', 'url', 'votes', 'description', 	'is_free', 'category.id as categoryId', 'name')
			.join('category', 'resource.category_id', 'category.id')
			.where('category.name', category);
	},

	getAllCategories: function() {
		return knex('category').select();
	},

	getCategoryById: function(id) {
		return knex('category').where({
			id: id
		}).first();
	}

};
