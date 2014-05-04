var page = require('webpage').create(),
    system = require('system'),
    numberPage = 0,
    Wanted_currentPage,
    DLLock = true,
    conut_getImage = 0,
    address;

if (system.args.length === 1) {
    console.log('Usage: netlog.js <some URL>');
    phantom.exit(1);
} else {
    address = system.args[1];
    // Wanted_currentPage = parsePageFromURL(address);
    console.log('Wanted_currentPage',Wanted_currentPage)
    console.log('address',address)
    // page.onResourceRequested = function (req) {
    //     console.log('requested: ' + JSON.stringify(req, undefined, 4));
    // };



    page.open(address, function (status) {
        if (status !== 'success') {
            console.log('FAIL to load the address'); 
        }

			numberPage = page.evaluate(function(){
				return document.getElementById("pageSel").length;
				// console.log('imgUrlinner')
			});        
			console.log('numberPage',numberPage)
       	// return numberPage
        phantom.exit();
    });
}

