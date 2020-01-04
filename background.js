chrome.contextMenus.create({
    "title":"この商品をサクラチェッカーで見る",
    "type":"normal",
    "contexts":["link"],
    "onclick":function(info) {
        console.log(info.linkUrl);
        const regexp = /[0-9A-Z]{10}/;
        const merchandise  = info.linkUrl.match(regexp)[0];
        console.log(merchandise);
        let url = "https://sakura-checker.jp/search/"+merchandise;
        chrome.tabs.create({url :url});
    }
});