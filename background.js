chrome.contextMenus.create({
    "title":"この商品をサクラチェッカーで見る",
    "type":"normal",
    "contexts":["link"],
    "onclick":function(info) {
        let merchandise  = info.linkUrl.match(/B0[0-9A-Z]{8}/)[0];
        console.log(merchandise);
        let url = "https://sakura-checker.jp/search/"+merchandise;
        chrome.tabs.create({url :url});
    }
});