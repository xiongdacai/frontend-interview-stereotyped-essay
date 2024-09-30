# 1.对 html 语义化的理解
1. 有利于开发人员维护。有更强的可读性。
2. 有利于SEO优化。有利于爬虫爬取更多更精准的信息。

# 2.前端页面有哪三层构成
1. 结构层：HTML
2. 表示层：CSS
3. 行为层：JS

# 3.严格模式与混杂模式
1. 严格模式：遵循W3C规范，更少的自由度和意外风险
2. 混杂模式：不完全遵循标准，兼容老版本浏览器

# 4.W3C
全称：World Wide Web Consortium 万维网联盟

制定标准包含：HTML、CSS、ECMAScript等等

# 5.行级元素、块级元素、行内块元素
1. 行级元素：span，a，strong等
    1. 不独占一行，宽度由内容撑开
    2. 可设高度，内外边距，不可设宽度
    3. 只能容纳行内元素
2. 块级元素：div，p，h1-h6，ul，ol，li等
    1. 独占一行，无宽度时是容器宽度100%
    2. 可设宽高，内外边距
    3. 可容纳行元素和块元素
3. 行内块元素：img，input等
    1. 不独占一行，可设置宽高
    2. 同时遵循BFC和IFC
    3. 开发建议转为块级元素

# 6.H5新增
1. 语义化标签：header，footer，nav等
2. 音视频：video，audio
3. 画布：canvas

# 7.Meta标签作用
1. 是HTML元数据标记，用于提供网页文档信息，通常位于header内。为浏览器和搜索引擎提供额外的信息
2. 配置：
    1. 字符集charset
    2. 视口设置：```<meta name="viewport" content="width=device-width, initial-scale=1.0">```
        1. width
        2. height
        3. initial-scale
        4. maximum-scale
        5. minimum-scale
        6. user-scale
    3. 描述：```<meta name="description" content="这里填写你想要展示给用户看到文字介绍"/>```
    4. SEO相关：```<meta name="keyword" content="淘宝,掏宝,网上购物,C2C,在线交易,交易市场,网上交易,交易市场,网上买,网上卖,购物网站,团购,网上贸易,安全购物,电子商务,放心买,供应,买卖信息,网店,一口价,拍卖,网上开店,网络购物,打折,免费开店,网购,频道,店铺">```
    5. PWA相关

# 8.Script的async和defer
1. 正常情况下浏览器执行到script标签时会下载解析并运行，完成后再解析script以后的HTML内容。也即流程同步。
2. 如果增加async，则会在解析HTML同时下载解析。若加载完成，则会阻塞HTMML解析转而执行script，结束后再继续解析HTML。
3. 如果增加defer，则会在解析HTML同时下载和解析。等到HTML全部解析完成后再根据script的先后顺序依次执行。

