// Context menu click callback
function genericOnClick(info, tab) {
    var text = info.selectionText;
    
    // Bitcoin addresses are 34 characters or less, as a rule. (https://en.bitcoin.it/wiki/Address)
    if( text.length > 34 ){
        chrome.tabs.create( {url: 'http://blockchain.info/address/' + text} );
    } else {
        chrome.tabs.create( {url: 'http://blockchain.info/tx/' + text} );
    }
}

// Create menu item for selected address
var context = 'selection';
var title = 'Search Blockchain.info for this address/transaction...';

chrome.contextMenus.create({
    'title': title,
    'contexts': [context],
    'onclick': genericOnClick
});

// Create menu item for right-click on a page
context = 'page';
title = 'Select bitcoin address or transaction-hash to search';

chrome.contextMenus.create({
    'title': title,
    'contexts': [context],
    'onclick': genericOnClick
});
