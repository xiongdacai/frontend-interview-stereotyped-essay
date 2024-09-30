# ECMAScript
## 数据类型
1. 简单数据类型,存于栈中：
   1. string
   2. number
   3. symbol
   4. bigint
   5. boolean
   6. null
   7. undefiend
2. 复杂数据类型:
   1. Object
3. 简单数据类型存在栈中，复杂数据类型（包括array和function）存在堆中，但指针存在栈中。
4. 检测数据类型：
   1. typeof```typeof true==='boolean'```
      1. 数组，对象，null判为object
   2. instanceof```[] instanceof Array===true;2 instaceof number===false```
      1. 正确进行引用数据类型判断
      2. 无法判断基本数据类型
   3. constructor```(2).constructor===Number // true```
      1. 若创建对象并改变原型，则判断不准确
## this
1. this指向情况：
   1. 非对象属性的函数调用，this指向全局
   2. 对象方法调用时，this指向这个对象
   3. 构造器中this指向新创建对象
   4. 事件触发函数，this指向这个触发对象
   5. 箭头函数中this指向根据箭头函数上下文判定
2. call,apply,bind均能返回this指向：
   1. call：立即执行，但函数参数需一一枚举
   2. apply：立即执行，但参数为数组
   3. bind：返回新的函数，函数this指向指定的对象
## 箭头函数