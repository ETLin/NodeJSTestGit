var Q = require("q");

var page = require('webpage').create(),
    system = require('system'),
    numberPage = 0,
    Wanted_currentPage,
    DLLock = true,
    conut_getImage = 0,
    address;

var count4Q = 0;
// // startApp().then(endPhantom);
// loop(count4Q);
// // .then(endPhantom);


function startApp(){
	console.log('startApp')
	// count4Q = count4Q +1;
	// console.log('count4Q',count4Q)
	return Q.fcall(FirstLayer).then(SecondLayer);
}

function loop(count4Q){
	count4Q =count4Q +1;
	console.log('count4Q',count4Q)
	if (count4Q<=2)
	{
		// startApp();
		Q.fcall(FirstLayer).then(SecondLayer).then(function(){
			return loop(count4Q);
		});
		// return loop(count4Q)
	}
	else
	{
		endPhantom();
	}
}

function FirstLayer(){
	console.log('FirstLayer');
} 

function SecondLayer(){
	console.log('SecondLayer');
} 

function ThirdLayer(){
	console.log('ThirdLayer');
} 

function endPhantom(){
	phantom.exit();
}

// console.log('page',page)
// if (system.args.length === 1) {
//     console.log('Usage: netlog.js <some URL>');
//     phantom.exit(1);
// } else {
//     address = system.args[1];
//     Wanted_currentPage = parsePageFromURL(address);
//     console.log('Wanted_currentPage',Wanted_currentPage)
//     console.log('address',address)
//     // page.onResourceRequested = function (req) {
//     //     console.log('requested: ' + JSON.stringify(req, undefined, 4));
//     // };

//     page.onResourceReceived = function (res) {
//     	// var resData = JSON.stringify(res, undefined, 4);

//     	if (res.contentType =='image/jpeg')
//     	{
// 			        if (numberPage <= 0 )
// 			        {
// 						numberPage = page.evaluate(function(){
// 							return numberPage = document.getElementById("pageSel").length;
// 							// console.log('imgUrlinner')
// 						});          
// 						console.log('numberPage',numberPage)  

// 					}    		
// 	    	var parts = res.url.split("/");
// 	    	var matchUrl = parts[parts.length-4];
// 	    		var matchUrl_id = parts[parts.length-1];
// 	    		var currentPage = parseInt(matchUrl_id.slice(0,3),10);	
// 	    		// console.log('matchUrl_id.slice(0,3)',matchUrl_id.slice(0,3))
// 	    		// console.log('res.url',res.url)
// 	    		// console.log('matchUrl_id',matchUrl_id)    
// 	    		console.log('currentPage',currentPage)	
// 	    		console.log('Wanted_currentPage',Wanted_currentPage)	

// 	    	if ('OnlineComic3' ==matchUrl && currentPage ==Wanted_currentPage)
// 	    	{
// 	    		var imgUrl = res.url;
// 		    	// console.log('contentType',res.contentType)
// 		    	console.log('contentType',imgUrl)

// 		        // console.log('received: ' + JSON.stringify(res, undefined, 4));

// 		        setTimeout(getImage(imgUrl),100);
// 		      DLLock = false;

// 			}
//     	}
//     };

//     page.open(address, function (status) {
//         if (status !== 'success') {
//             console.log('FAIL to load the address'); 
//         }
       
//         phantom.exit();
//     });
// }


if (system.args.length === 1) {
    console.log('Usage: netlog.js <some URL>');
    phantom.exit(1);
} else {
    address = system.args[1];
    Wanted_currentPage = parsePageFromURL(address);
    console.log('Wanted_currentPage',Wanted_currentPage)
    console.log('address',address)

    // loopScrapt(address);
    initialParseUrl(address);


}

function loopScrapt(address){
	count4Q =count4Q +1;
	console.log('count4Q',count4Q)
	if (count4Q<=2)
	{
		// startApp();
		console.log('count4Q',count4Q)

		Q.fcall(initialParseUrl(address)).then(SecondLayer).then(function(){
			console.log('address',address)
			return loopScrapt(address);
		});
		// return loop(count4Q)
	}
	else
	{
		endPhantom();
	}
}

function initialParseUrl(address){
	// console.log('outside initialParseUrl')
	console.log('initialParseUrladdress',address)
		var deferred = Q.defer();

		deferred.resolve(function(){
			page.open(address, function(status) {
			console.log('inside initialParseUrl')
	        if (status !== 'success') { console.log('FAIL to load the address'); }	
			numberPage = page.evaluate(function(){
				numberPage = document.getElementById("pageSel").length;
					// console.log('imgUrlinner')
			});          
			console.log('numberPage',numberPage);

			// return deferred.promise;
			});
		});
		console.log('deferred');
		return deferred.promise;

}

// function getImage(getImage_imgUrl){
// 	// console.log('getImage',getImage_imgUrl)
// 	// conut_getImage = conut_getImage +1;
// 	// console.log('conut_getImage',conut_getImage)
// 	// setTimeout(function(){phantom.exit(),100});
// 	var page1 = require('webpage').create()
// 	page1.viewportSize = { width: 1145, height: 815 };
// 	page.zoomFactor = 1.8;
// 			page1.open(getImage_imgUrl, function(status) {
// 				console.log('url',page.url)
// 			// 	console.log('page render')
// 			  page1.render('img/'+Wanted_currentPage +'.jpg', {format: 'jpg', quality: '100'});
// 			//   // setTimeout(function(){phantom.exit(),100});
// 			//   console.log('getImage',getImage_imgUrl)
// 			//   // var content = page.content;
// 			//   // console.log('page content',content)
// 			page1.release;
// 			console.log('page',page1)
// 			  phantom.exit()
// 			//   setTimeout(function(){phantom.exit(),100});
// 			});	
// };

function parsePageFromURL(parsePageFromURL_address){
	var parts_address = parsePageFromURL_address.split("?");
	var parts_address_Page = parts_address[parts_address.length-1];
	var Wanted_currentPage = parseInt(parts_address_Page.slice(2));	 
	// console.log('Wanted_currentPage',Wanted_currentPage)
	return Wanted_currentPage;
};
