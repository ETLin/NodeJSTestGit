var request = require('request'),
	cheerio = require('cheerio'),
	fs = require('fs'),
	appleObjs = {},
	category = {},
	jsonOutputData = {};


host = 'http://www.appledaily.com.tw';

// for(
var page_appledaily=1;//page_appledaily<=5;page_appledaily++)
// {
request('http://www.appledaily.com.tw/realtimenews/section/new/'+page_appledaily,function requestToDo(error, response, body){
	// console.log('response',body)
	if (!error && response.statusCode ==200 )
	{
		var $ = cheerio.load(body);
		$('.rtddt','.abdominis').each(function(elem){
			// numberOfPage = numberOfPage+1;

			var CSSclass_appleObj = $(this).attr('class');
			var classes_appleObj = parseCSSClass(CSSclass_appleObj);
			var class_appleObj = classes_appleObj[1];

			var carry_video = false;
			carry_video = parseSpecificTarget('hsv',classes_appleObj);
			// console.log('carry_video',carry_video)

			var time_appleObj = $(this).find('time').text();
			
			var title_appleObj = $(this).find('font').text();

			var url_appleObj_tail = $(this).find('a').attr('href');
			var url_appleObj = host + url_appleObj_tail;

			var appleObj = {
				"newsclass" : class_appleObj,
				"title" : title_appleObj,
				"url" : url_appleObj,
				"time" : time_appleObj,
				"video" : carry_video
			};

			appleObjs[Object.keys(appleObjs).length] = appleObj;
			// console.log('appleObjs length',Object.keys(appleObjs).length)
			push2Category(class_appleObj,category);

		});

		// console.log('appleObjs',appleObjs)
		// console.log('category',category)
		// generate_jsonOutputData();
		page_appledaily++;
		if (page_appledaily<=5)
		{
			request('http://www.appledaily.com.tw/realtimenews/section/new/'+page_appledaily,requestToDo(error, response, body));
			generate_jsonOutputData();
			// console.log('category',category)
			console.log('appleObjs',appleObjs)
		}
	}
});
// 		// console.log('appleObjs',appleObjs)
// 		// console.log('category',category)
// }

// var requestToDo = function(error, response, body){

// };

var parseCSSClass = function(targetString){
	var splits = targetString.split(" ");
	return splits;
};

var parseSpecificTarget = function(targetString,targetObj){
	var FindspecificTarget = false;
	var pointer4Obf = 0;
	var targetObjLength = targetObj.length;
	// console.log('targetObjLength',targetObjLength)
	while(FindspecificTarget = false && pointer4Obf <= targetObjLength-1)
	{
		var candidate = targetObj[pointer4Obf];
		// console.log('candidate',candidate)
		if (targetString == candidate)
		{
			FindspecificTarget = true;
			// console.log('FindspecificTarget',pointer4Obf +1 )
			break;
		}

		pointer4Obf++;
	}
	// console.log('FindspecificTarget',FindspecificTarget )
	// console.log('targetString',targetString)
	// console.log('targetObj',targetObj)
	return FindspecificTarget;
};

var objLength = function(targetObj){
	return Object.keys(targetObj).length;
}; 

var push2Category = function(candidate_category,category){
	var length_category = objLength(category);
	// console.log('first coming length_category',length_category);
	var FindspecificTarget = false;
	var pointer4Obj = 0;

	if(length_category !=0)
	{
		while(FindspecificTarget ==false && pointer4Obj < length_category)
		{
			var local_category = category[pointer4Obj].newsclass;
			// console.log('local_category',local_category)
			if(local_category == candidate_category)
			{
				FindspecificTarget = true;
				// console.log('local_category',local_category)
				break;
			}
			pointer4Obj++;
			// console.log('pointer4Obj',pointer4Obj)
		}

		if(FindspecificTarget ==true)
		{
			var local_news_count = category[pointer4Obj].news_count;
			local_news_count++;
			category[pointer4Obj].news_count = local_news_count;
			// console.log('category',category);
			// console.log('length_category',length_category);
		}
		else if(FindspecificTarget ==false)
		{
			category[pointer4Obj] = {newsclass:candidate_category,news_count:1};
			// console.log('category',category);
			// console.log('length_category',length_category);
		}

	}
	else if(length_category ==0)
	{
		category[0] = {newsclass:candidate_category,news_count:1};
		// console.log('category',category);
		// console.log('length_category',length_category);
	}




};

var generate_jsonOutputData = function(){
	var local_jsonOutputData = [];

	var local_length_appleObjs = objLength(appleObjs);
	var local_length_category= objLength(category);

	// console.log('local_length_appleObjs',local_length_appleObjs);

	for(var i=0;i<local_length_category;i++)
	{
		var local_category = category[i].newsclass;
		// console.log(appleObjs[i]);
		var common_title_appleObjs = [];
		for(var j=0;j<local_length_appleObjs;j++)
		{
			if(appleObjs[j].newsclass ==local_category)
			{
				common_title_appleObjs.push(appleObjs[j]);
				// console.log('local_category',local_category)
				// console.log('appleObjs newsclass',appleObjs[j].newsclass)
			}
		}
		category[i].news = JSON.stringify(common_title_appleObjs);

	}
	// console.log('category',category)
};










