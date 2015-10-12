var keystone = require('keystone');
var ccap = require('ccap')();

exports = module.exports = function(req, res) {
	
	var ary = ccap.get();

    var txt = ary[0];

    var buf = ary[1];
	req.session.code = txt;
	res.header('Content-Type', 'image/jpeg');
	res.send(buf);
	
};
