var request = require('request'),
	cheerio = require('cheerio'),
	urls_Page = [],
	numberOfPage = 0;
	totalPage = 93;

request('http://comic.sfacg.com/HTML/chengslr/001j/?p=1',function(error, response, body){
	console.log('response',body)
	if (!error && response.statusCode ==200 )
	{
		var $ = cheerio.load(body);
		$('select#pageSel','option').each(function(){
			numberOfPage = numberOfPage+1;

		});
		// var length = $('tbody select#pageindex').find('option').length;
		// console.log($('#TotalPage'));

		// console.log('numberOfPage',numberOfPage);

	}
});

11
