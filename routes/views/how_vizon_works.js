var keystone = require('keystone');

exports = module.exports = function(req, res) {

	var locals = res.locals,
		view = new keystone.View(req, res);

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'How Vizon Works';
	//
	// Render the view
	view.render('how-vizon-works', { currentUrl: req.path });

};