var keystone = require('keystone');

exports = module.exports = function(req, res) {
	//console.log(req.params.id);
	var view = new keystone.View(req, res);
	var locals = res.locals;
	locals.data = {
		doc: []
	};

	locals.section = 'adoc';

	// Load the docList
	view.on('init', function(next) {
		
		var q = keystone.list('Doc').model.findOne({_id:req.params.id})
		
		q.exec(function(err, result) {
			locals.data.doc = result;
			next(err);
		});
		
	});

	// Render the view
	view.render('adoc',{title:'医生详情',name:'docdetail'});
	
};
