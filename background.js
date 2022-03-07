chrome.contextMenus.create({
    "title":"この商品をサクラチェッカーで見る",
    "type":"normal",
    "contexts":["link"],
    "onclick":function(info) {
        
        console.log("リダイレクト前：", info.linkUrl);
        
        //商品ページURL文字列における、スラッシュに挟まれた連続した10文字の英数字の中で最初に現れるものを、サクラチェッカーでの検索時の商品ID文字列と推測
        const regexp = /\/[0-9A-Z]{10}\//;
        
        //商品一覧ページにおけるリンクURLと実際の商品ページのURLは（リダイレクトされて）異なるのでfetch APIでリダイレクト先のURLを取得し、そちらのURL文字列を評価し、得られた推測商品IDでもってサクラチェッカーの評価ページを開く
        fetch(info.linkUrl).then(response => {
            console.log("リダイレクト後：", response.url);
            const merchandise = response.url.match(regexp)[0].substring(1,11);
            console.log("推測商品ID：", merchandise);
            chrome.tabs.create({url:"https://sakura-checker.jp/search/" + merchandise})
        });
    }
});