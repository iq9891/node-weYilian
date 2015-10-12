var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	locals.data = {
		docs: []
	};
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'alist';
	
	// Load the docList
	view.on('init', function(next) {
		
		var q = keystone.list('Doc').model.find()
		
		q.exec(function(err, results) {
			locals.data.docs = results;
			next(err);
		});
		
	});
	
	// Render the view
	view.render('alist',{title:'医生列表',name:'doclist'});
	
};
