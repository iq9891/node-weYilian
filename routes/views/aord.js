var keystone = require('keystone');

exports = module.exports = function(req, res) {
	//console.log(req.params.id);
	var view = new keystone.View(req, res);
	var locals = res.locals;
	locals.data = {
		doc: []
	};

	locals.section = 'aord';

	// Render the view
	view.render('aord',{title:'约专家',name:'addclient'});
	
};
