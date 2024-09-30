# Document Object Model
js可操作的html对象
1. 种类：
   1. 元素节点：HTML元素。
   2. 文本节点：元素之间的文本内容。为元素节点子节点。
   3. 属性节点：表示元素属性。src，class，id等。
   4. 注释节点：```<!---->```。
   5. 文档节点：表示整个文档根节点。
   6. 文档类型节点：文档类型声明```<!DOCTYPE>```。
2. 获取DOM：
   1. ```document.getElementById('div1') // 元素```
   2. ```document.getElementByTagName('div') // 伪数组```
   3. ```document.getElementByClassName('.msg') // 伪数组```
   4. ```document.querySelectorAll('p') // 伪数组```
   5. ```document.querySelector('p') // 元素，若有多个找第一个```
3. DOM参数：
   1. ```dom.style.width // 样式```
   2. ```dom.className // 类名```
   3. ```dom.getAttribute('style') // 获取属性为style的值。```
   4. ```dom.setAttribute('data-name','dom1') // 设置自定义参数(因为是data前缀)。```
4. 操作：
   1. 新增：
      1. ```var sonDom=document.createElement('tagName')```
      2. ```dom.appendChild(sonDom) // 挂载节点到渲染树```
   2. 获取父元素：
      1. ```dom.parentElement()```
   3. 获取所有子元素：
      1. ```dom.childNodes()```
   4. 删除节点：
      1. ```dom.removeChild(childDom)```