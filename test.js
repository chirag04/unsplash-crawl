var uc = require('./');

uc.crawl({
	path: './images',
	start_page: 1,
	end_page: 1,
},function(images){
	console.log(images);
});