var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Doc Model
 * ==========
 */

var Doc = new keystone.List('Doc');

Doc.add({
	name: { type: String, required: true, index: true },
	image: { type: Types.CloudinaryImage },
	hosp: { type: String, default: '' },
	depart: { type: String, default: '' },
	good: {type: Types.Html, wysiwyg: true, height: 150 },
	jobTitle: { type: Types.Select, options: '主任医师, 副主任医师, 主治医师', default: '主治医师' },
	state: { type: Types.Select, options: '预约, 约满', default: '预约' }
});

Doc.register();
