chrome.contextMenus.create({
    "title":"この商品をサクラチェッカーで見る",
    "type":"normal",
    "contexts":["link"],
    "onclick":function(info) {
        console.log(info.linkUrl);
        //リンク文字列で最初に現れる10文字の英数字をサクラチェッカーで検索時の商品ID文字列と推測
        const regexp = /[0-9A-Z]{10}/;
        //リンク文字列から商品IDと思われる文字列を検索
        const merchandise  = info.linkUrl.match(regexp)[0];
        console.log(merchandise);
        //サクラチェッカーの検索URLを生成
        let url = "https://sakura-checker.jp/search/"+merchandise;
        //検索結果を新しいタブで表示
        chrome.tabs.create({url :url});
    }
});