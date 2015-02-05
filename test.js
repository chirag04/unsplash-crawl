var uc = require('./');

uc.crawl({
	path: './images',
	start_page: 1,
	end_page: 1,
},function(err, images){
	console.log(err);
	console.log(images);
});