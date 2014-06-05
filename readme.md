# Overview

Crawl all images from unsplash.com

## Use

Install

`npm install unsplash-crawl`


JavaScript Code:


```javascript

var uc = require('unsplash-crawl');

uc.crawl({
	start_page: 1,
	end_page: 12
},function(image){
	console.log(images);
	/*
		[ 
		  { image_link: 'http://bit.ly/1k0ahr1',
		    author: 'Mario Calvo ',
		    author_link: 'http://www.flickr.com/mariocalvo10' },
		  { image_link: 'http://bit.ly/1iqeekr',
		    author: 'Anna Dziubinska',
		    author_link: 'https://www.flickr.com/photos/52278955@N03/' },
		  { image_link: 'http://bit.ly/1iqfCDw',
		    author: 'Jacob Aguilar-Friend',
		    author_link: 'http://www.jacobaguilarfriend.com' },
		  { image_link: 'http://bit.ly/1k0a0UU',
		    author: 'Steven Lewis',
		    author_link: 'http://notsteve.com' },
		  { image_link: 'http://bit.ly/1k0aOsV',
		    author: 'Alex Talmon',
		    author_link: 'http://www.alextalmon.nl' },
		  { image_link: 'http://bit.ly/1k09Pcj',
		    author: 'Has Bonk',
		    author_link: 'https://www.behance.net/hasb' },
		  { image_link: 'http://bit.ly/1iqeno1',
		    author: 'Alex Gindin',
		    author_link: 'https://twitter.com/alexgindin' },
		  { image_link: 'http://bit.ly/RHLDzW',
		    author: 'Caleb George Morris',
		    author_link: 'http://caleb-morris.com' },
		  { image_link: 'http://bit.ly/1k9ssfd',
		    author: 'Rafael Fabricio Chiti',
		    author_link: 'http://500px.com/rafaelchiti' },
		  { image_link: 'http://bit.ly/RHLA7i',
		    author: 'Forrest Cavale',
		    author_link: 'http://4cc.co' } 
		]
	*/
});
```

## License

MIT