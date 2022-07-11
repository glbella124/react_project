[TOC]



## React简介

1. 用于构建用户界面的JavaScript库
   发送请求获取数据
   处理数据
   操作DOM呈现页面

2. 将数据渲染为HTML视图的开JavaScript库

3. Facebook开发， 开源

4. 对比

   a. 原生js操作dom繁琐，效率低(DOM-API操作UI)

   b. 浏览器会进行大量的重绘重排 - 不断地绘制，不断地重排

   c. 原生JavaScript没有组件化编码方案，代码复用率低

   d. 模块化 - 非常庞大的js按照功能点拆分成一个一个小的js

   e. 组件化 - html/css/js,etc 拆分

5. 声明式编码 - React自己操作dom

## React特点

1. 采用组件式模式，声明式编码， 提高开发效率及组件复用率

   声明式编码 - React自己可以操作dom

   命令式编码  -  缺一不可

2. 在React Native中可以使用React语法进行移动端开发

   (java - 安卓，oc, swift - ios)

3. 使用**虚拟DOM**， 优秀的Diffing算法， 尽量减少与真实DOM的交互

## jsx，js创建虚拟DOM方式对比

jsx:创建虚拟dom不繁琐, js创建繁琐

```js
    <script type="text/javascript">
        const vDom = React.createElement("h1",{id:"title"},React.createElement("span",{},"Inner container"))
        ReactDOM.render(vDom,document.getElementById("myDiv"))
    </script>
```

#### 虚拟DOM特点:

1. 本质是Object类型的对象
2. 比较轻，React内部在用，无需真实dom上那么多的属性
3. 最终会被React转化为真实DOM，呈现在页面上

## JSX介绍

react定义的类似于xml的js扩展语法

用来简化创建虚拟DOM ，它最终产生的就是一个JS对象

**xml - 早期用于存储和传输数据** 

JSON.stringfy -  js转换成字符串
**语法规则**
1.定义虚拟dom不用引号
2.标签混入js表达式用{}
3.样式类名指定用className表示
4.内联样式style={{key:value}} 外层表示要写js的表达式，内层表示要写的不是js数组而是函数对象
key用小驼峰
5.虚拟dom只有一个根标签
6.标签必须闭合
7.标签首字母小写转为html中同名元素，若无该标签对应的HTML同名元素报错；大写React去渲染对应组件，无则报错

## 模块化和组件化

#### 模块及模块化

向外提供特定功能的js程序, 一般就是一个js文件

随着业务逻辑增加，代码越来越复杂

**当应用的js都以模块来编写的, 这个应用就是一个模块化的应用**

#### 组件及组件化

用来实现局部功能效果的代码和资源的集合(html/css/js/image等等)

 一个界面的功能更复杂，复用编码, 简化项目编码, 提高运行效率

**当应用的js都以模块来编写的, 这个应用就是一个模块化的应用**













