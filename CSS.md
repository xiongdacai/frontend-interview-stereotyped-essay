# Cascading Style Sheet
## BFC
1. 定义：
   1. BFC是块级格式化上下文（Block Formatting Context）的缩写。内部的所有内容都会按照特定规则进行排列，并且不受外部样式影响。
2. 解决问题：
   1. 边距合并（Margin Collapse）：当相邻两个元素垂直方向上的外边距发生重叠时，会导致它们之间只显示一个外边距。通过创建 BFC 可以避免这种情况。
    ```<div style="margin-bottom: 10px;">Element A</div><div style="margin-top: 10px;">Element B</div>```
   2. 边距塌陷：子元素除了顶部margin没有其他样式，则该 margin 也会传递给其父容器来实现对齐位置。
   3. 清除浮动：当父容器内部有浮动元素时，其高度无法被正确计算，在没有清除浮动或触发 BFC 的情况下会导致父容器塌陷。使用BFC可以使得父容器能够包含子元素的浮动内容。
3. 触发条件：
   1. oveflow：scroll,auto,hidden
   2. float:left,right
   3. position:absolute,fixed
   4. display:inline-block,flex,grid
   5. ......
## 盒子模型
1. 普通盒子模型(content-box)：width=content-width
2. 怪异盒子模型(border-box)：width=content-width+padding-left+padding-right+border-left+border-right
## 选择器
1. id选择器：```#id```
2. 类选择器：```.class```
3. 属性选择器：```[attr=val]```
4. 伪类选择器：```:hover```,````:nth-child```
5. 标签选择器：```div```
6. 兄弟选择器：```.class+.class```
7. 子选择器：```ul>li```
8. 后代选择器：```ul li```
9. 通配符选择器：```*```
### 优先级
1. ```!import```
2. 内联样式
3. ID选择器
4. 类/属性/伪类
5. 元素/伪元素
6. 关系/通配符
7. 浏览器默认
## 继承
1. 有继承的：
   1. font:
      1. font-family
      2. font-weight
      3. font-size
      4. font-style
   2. text:
      1. text-indent
      2. text-align
      3. line-height
      4. direction
      5. color
   3. visibility
2. 无继承的：
   1.  display
   2.  vertical-align,text-decoration
   3.  背景属性，盒子模型属性，定位属性等
## 单位
1. px
2. em/rem
3. vh/vw
## 响应式设计
1. ```@mediascreen (min-width:num px ) and(max-width: 600px)```
2. 百分比
3. vw/vh
4. rem
## 清除浮动
1. 父级添加```<div style="clear:both;"></div>```
2. 父级添加overflow属性
3. 建立伪类选择器清除浮动