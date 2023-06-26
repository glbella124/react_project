[TOC]



## 1. React简介

1. 用于构建用户界面的JavaScript库
   发送请求获取数据
   处理数据
   操作DOM呈现页面

   React-Router -- 专门做路由的库
   PubSub -- 消息管理的库
   Redux -- 专门做集中式状态管理的库
   Ant-Design -- UI组件库
   
   React只关注界面

2. 将数据渲染为HTML视图的开JavaScript库

3. Facebook开发， 开源

4. 对比

   a. 原生js操作dom繁琐，效率低(DOM-API操作UI)

   b. 浏览器会进行大量的重绘重排 - 不断地绘制，不断地重排

   c. 原生JavaScript没有组件化编码方案，代码复用率低

   d. 模块化 - 非常庞大的js按照功能点拆分成一个一个小的js

   e. 组件化 - html/css/js,etc 拆分

5. 声明式编码 - React自己操作dom

## 2. React特点

1. 采用组件式模式，声明式编码， 提高开发效率及组件复用率

   声明式编码 - React自己可以操作dom

   命令式编码  -  缺一不可

2. 在React Native中可以使用React语法进行移动端开发

   (java - 安卓，oc, swift - ios)

3. 使用**虚拟DOM**， 优秀的Diffing算法， 尽量减少与真实DOM的交互

## 3. jsx，js创建虚拟DOM方式对比

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

## 4. JSX介绍

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

## 5. 模块化和组件化

#### 模块及模块化

向外提供特定功能的js程序, 一般就是一个js文件

随着业务逻辑增加，代码越来越复杂

**当应用的js都以模块来编写的, 这个应用就是一个模块化的应用**

#### 组件及组件化

用来实现局部功能效果的代码和资源的集合(html/css/js/image等等)

 一个界面的功能更复杂，复用编码, 简化项目编码, 提高运行效率

**当应用的js都以模块来编写的, 这个应用就是一个模块化的应用**



## 6. 严格模式

禁止自定义的this指向window
Babel编译后开启严格模式

## 7. 函数式组件/类式组件

类式组件里的render放在类的原型对象上，供实例使用

React dom.render
react解析组件标签，找到组件
发现组件***由函数定义***，调用函数，将返回的虚拟dom转为真实dom呈现在页面上

发现组件***由类定义的***，随后new出来该类实例，并通过该实例调用到原型上的render方法
将render返回的虚拟dom转为真实dom，呈现在页面中

## 8. 组件实例的三大核心属性

### state

1. 组件被称为“状态机”，通过更新组件state更新对应的页面显示（频繁调用render- 重新渲染组件），组件维护状态，状态存着数据
2. 组件render中的this为组件实例对象
3. 自定义方法中this为undefined (作为事件回调)
   <!-- 强制绑定this -->
    this.weather = this.change.bind(this);
    <!-- 箭头函数 -->
    change = () => {
          const isHot = this.state.isHot;
          this.setState({ isHot: !isHot });
        };
4. 状态数据修改 - setState

### 类组件中的this指向

```javascript
class ChangeWeather extends React.Component {
        // 构造器方法
        constructor(props) {
          //构造器中的this,指实例对象
          super(props);
          this.state = { isHot: false };
        }
        render() {
          //   console.log(this);
          //   const isHot = this.state.isHot
          //   return <h2>It's really {isHot? "hot":"cool"} today!</h2>;
          // 解构赋值
          //   demo() - 调用函数，undefined作为回调
          //   demo - 制定函数
          const { isHot } = this.state;
          //   沿着类的原型链找到了change函数，直接将该函数交给onClick作为回调
          return (
            <h2 onClick={this.change}>
              It's really {isHot ? "hot" : "cool"} today!
            </h2>
          );
        }
        change() {
            // 由于change作为onClick的回调，直接调用不是通过实例调用的
            // 类中的方法，默认开启了局部的严格模式
            console.log(this);
            
        }
      }

      ReactDOM.render(<ChangeWeather />, document.getElementById("test"));
```

#### 严格模式？

在普通模式中，如果一个变量没有声明就赋值，默认是全局变量，严格模式禁止这种用法，变量都必须先用var命令声明，然后再使用。

- 以前在全局作用域函数中的this指向window对象。
- ***严格模式下全局作用域中函数中的this是undefined***。
- 以前构造函数时不加new也可以调用，当普通函数，this指向全局对象。
- 严格模式下，***如果构造函数不加new调用，this会报错***。
- new实例化的构造函数指向创建的对象实例。
- 定时器this还是指向window。
- 事件、对象还是指向调用者。

参考博文：

https://blog.csdn.net/m0_61843874/article/details/123247934

### props
传递标签属性
### refs
#### 类式
1. 字符串ref - 不推荐，效率低

2. 回调函数 - 内联函数

   问题：调用两次，第一次为null,会清空节点

   ```javascript
   <input ref={(c) => {this.input1 = c}} type="text" placeholder="请输入文本"/
   ```

   ```javascript
   saveInput = (c)=>{
                   // 把接到的节点挂在了Input1上
                   this.input1 = c;
                   console.log(c,"***");
   
               }
   
               // this.input1,箭头函数没有自己的this,会指向外层render,类的实施
               // 内联函数 - 标签内部直接去定义一个函数
               // 回调refs - 更新过程中被执行两次
               render() {
                   const { isHot } = this.state;
                   const dom = (
                       <div>
                           <h3 onClick={this.changeWeather}>
                               It's really {isHot ? "hot" : "cool"} today
                           </h3>
                            {/*回调函数单独写在外面，可以解决render时为null的情况*/}
                           <input ref={this.saveInput} type="text"/><br/><br/>
                           
   
                           <button onClick={this.clickEvent}>显示提示文本</button>
                           <button onClick={this.changeWeather}>切换天气</button>
                       </div>
                   );
                   return dom;
               }
   ```

   

3. React.createRef() - 使用内置api

   
##### 回调函数
1. 自定义的函数
2. 没有调用
3. 函数最终执行了

## 9. 事件处理

表单提交
form action
不指定请求方式，默认请求是get
默认带的参数是query参数
event.target指的是父dom
当前dom节点
当前dom节点的值

原生事件
event.preventDefault
阻止表单默认事件提交

原生改变事件onchange

#### 非受控组件：
页面中所有输入类的dom现用现取
有几个输入项，就需要几个ref

#### 受控类组件:
页面中所有输入类的dom
随着输入可以把东西维护到状态里面，等需要用的时候从状态里直接取出来，类似vue里的双向数据绑定，react里没有双向数据绑定
不用ref

## 10. 高阶函数

1. A函数，接收的参数是一个函数，A即为高阶函数

2. A函数，调用的返回值依然是一个函数，A即为高阶函数

3. 函数的柯里化 - 通过函数调用继续返回函数的方式，实现多次接收参数最后统一处理的函数编码形式

   ```javascript
    // 高阶函数
               // 调用的返回值是一个函数
               saveFormData = (dataType) =>{
                   return (event)=>{
                       this.setState({[dataType]:event.target.value})
                   }
               }
   ```

   

4. 常见的高阶函数 - promise

   ```javascript
   new Promise(()=>{})
   
   setTimout(()=>{})
   setInterval(()=>{})
   arr.map(()=>{})
   ```

## 11. 生命周期

#### 旧生命周期

挂载 - mount
卸载 - unmount
ReactDOM. 
unmountComponentAtNode

定时器放在render里
每调用一次render就会触发一次定时器，

![react生命周期(旧)](E:\Bella\software\react全家桶资料\react全家桶资料\02_原理图\react生命周期(旧).png)

##### 旧生命周期的三个阶段（旧）

1. **组件初始化渲染**： 由ReactDOM.render()触发---初次渲染
   constructor构造器
   componentWillMount()
   render()
   componentDidMount()

2. **更新阶段**： 由组件内部this.setState()或父组件重新render触发

   父组件render
   componentWillReceiveProps()
   shouldComponentUpdate()
   componentWillUpdate()
   render()
   componentDidUpdate()

   

   setState更新
   **shouldComponentUpdate()**
   **componentWillUpdate()**
   **render()**
   **componentDidUpdate()**

   

   强制更新
   .forceUpdate()
   componentWillUpdate()
   render()
   componentDidUpdate()

3. 卸载组件 ： ReactDOM.unmountComponentAtNode（document.getElementById("test")）触发

   componentWillUnmount()（关闭定时器，取消订阅）

   

   



#### 新生命周期

新的生命周期和旧的生命周期相比，废弃了或者即将废弃三个钩子
componentWillMount()
componentWillReceiveProps()
componentWillUpdate()



得到派生的状态

getDerivedStateFromProps

##### 新生命周期的三个阶段（新）

1. 初始化阶段 由ReactDOM.render()触发---初次渲染

   constructor()

   getDerivedStateFromProps()

   **render()  ---------  初始化渲染或者更新渲染调用**

   **componentDidMount()**

2. 更新阶段: 由组件内部this.setSate()或父组件重新render触发

   getDerivedStateFromProps()

   shouldComponentUpdate()

   render()

   getSnapshotBeforeUpdate()

   componentDidUpdate()

3. 卸载组件 ReactDOM.unmountComponentAtNode触发

   componentWillUnmount()



## 12. diffing算法

#### React/vue 中的key有什么作用？(key内部原理）

1. 虚拟dom中的key - 是虚拟dom的标识

2. 状态数据发生变化时会比较新虚拟dom和旧虚拟dom,

   若二者key相同，就会比较内容

   (1).  内容没变，会使用之前的真实dom

   (2). 内容变了，会生成新的真实dom,替换掉页面之前的真实dom

   

   若旧虚拟dom中没有找到新的dom

   根据数据创新的真实DOM，随后渲染到页面

3. 以index作为key引发的问题

   对数据进行逆序添加，删除操作时 - 会产生没有必要的dom更新，效率低

   结构中包含输入类的dom，会产生错误的dom更新

4. 如何选择key

   数据的唯一标识

   

   
