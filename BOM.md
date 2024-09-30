# Browser Object Mode
1. navigator:(TODO)
   1. 该对象提供浏览器信息。包括：
      1. appCodeName:浏览器代码名。```"Mozilla"```
      2. appName：浏览器名称。```"Netscape"```
      3. appVersion：安装在计算机上运行当前浏览程序的操作系统或平台及其版本号码。```"5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36"```
      4. cookieEnabled：浏览器是否支持cookie。```true```
      5. userAgent：用户代理。```"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36"```
2. History:
   1. 保存历史路由信息。
   2. 参数：
      1. length:num,只读属性，保存历史记录条数。
      2. scrollRestoration："auto"/"manual"，控制导航改变时记录滚动位置恢复行为属性.
         1. auto:点击后退或前进时还原到相应位置。
         2. manual：点击后退或前进时每次都返回到(0,0)的位置。
      3. state：
         1. params对象：保存链接解析出的参数键值对。
   3. prototype：
      1. back():上一步
      2. forward()：下一步
      3. go(num)：跳转到某一个历史路由。
      4. pushState()：动态修改浏览记录而不导致页面刷新。会在当前URL后面追加一个新的状态，并且将其保存到历史记录中。
      5. replaceState()：动态修改浏览记录而不导致页面刷新。更新当前 URL 的状态信息，但并不创建新的 history 记录项。
3. location：
   1. href：当前文档url
   2. search：查询的url字符串，包括'?'
   3. hash：url#后面内容，没有则为空字符串
   4. host：域名+端口号
   5. hostname:域名
   6. pathname:origin后的路径
   7. port:返回url的端口号，没有则为空字符串
   8. protocol:URL的协议 ```https:```
   9. assign(url)：加载新的文档.
   10. replace(url):替换当前URL，并在history对象地址中移除。
   11. reload():重载当前页面（如何影响缓存？）
   12. origin：返回协议+域名+端口号