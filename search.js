// Context menu click callback
function genericOnClick(info, tab) {
    if( info.selectionText ){
        var bitcoinAddress = info.selectionText;
        chrome.tabs.create( {url: 'http://blockchain.info/address/' + bitcoinAddress} );
    }
}

// Create menu item for selected address
var context = 'selection';
var title = 'Search Blockchain.info for this ' + context + '...';

var id = chrome.contextMenus.create({
    'title': title,
    'contexts': [context],
    'onclick': genericOnClick
});

// Create menu item for right-click on a page
context = 'page';
title = 'Select bitcoin address to search';

var id = chrome.contextMenus.create({
    'title': title,
    'contexts': [context],
    'onclick': genericOnClick
});
