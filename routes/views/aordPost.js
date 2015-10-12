var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	
	//view.on('post', { action: 'contact' }, function(next) {

		var locals = res.locals;

		console.log(locals);
		
		console.log(req.body);
	//	console.log(111);
		console.log(req.session);
		if(req.session.code != req.body.codeImg){
			res.send({code:2,message:'验证码错误'});
			return;
		}
		res.send({code:1});
		//locals.section = 'aord';

	//});
	
};
