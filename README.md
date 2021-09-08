# UrJobs
An app to get a job

## redux管理数据
1. reudux中引入createStore();
2. 创建action、reducer声明和处理数据；
3. reducer负责处理数据，将reducer传入createStore函数；
4. redux需要使用store.subscribe()去订阅这个app，也就是你的项目；
数据流程是这样的：
5. 上面四步app对redux已经实施了监控，有变化就会重新渲染页面，页面上，
我们通过传入的属性store.getState()拿到数据，它是由：
 #### action去声明变量，放在store中；
 #### 然后reducer就会去执行数据处理的逻辑；
 #### 通过dispatch传入一个action的方法，建立state与页面的连接；
 #### 页面在执行store.getState()方法的时候就可以获取到最新的state数据并进行展示；

注：react-redux可以更方便的在react使用redux数据管理；

## react-redux
1. 提供了Provider组件，将store传入，就不用像redux一样（将store当做属性传入，这样做的好处就是以后再深层
嵌套数据的时候不用再一层层的传递数据），并且我们不用再使用subscribe方法去订阅了App了。
2. 使用connect方法去连接页面和state数据，传入两个参数：
   1） 一个是function类型，将state数据返回成对象（不再用store.getState获取数据）；
   2） 一个是object对象，将调用action的方法写入成对象（不再使用store.dispatch()函数去调用方法）；
   3） 使用的时候直接调用prop.state或者props.fc即可；

 #### 如果有多人一起开发情况下，就可能会创建多个reducer，或者你的一个reducer中可能为了清楚且语义化，会创建多个方法：
 ####  这时候我们需要使用combineReducers进行多个reducer的管理，它是个方法来自于redux本身，我们在自己的reducer文件中可以调用这个方法，传入的对象就是每个reducer函数，调用的时候页面上maptoProps方法，返回的是你的多个reducer，打印后，你就能看到，每一个state属性都在里面，我们直接在页面赋值调用即可，可以参考src/redux.jsx文件，同理多人的协作开发，我建议建立一个专门的文件用于放置多个reducer，一样使用combineReducers，然后到处的这个对象就是store需要的reducer。
