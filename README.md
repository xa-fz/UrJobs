# UrJobs
An app to get a job

## redux管理数据
1. reudux中引入createStore();
2. 创建action、reducer声明和处理数据；
3. reducer负责处理数据，将reducer传入createStore函数；
4. redux需要使用store.subscribe()去订阅这个app，也就是你的项目；
数据流程是这样的：
5. 上面四步app对redux已经实施了监控，有变化就会重新渲染页面，页面上，
我们通过传入的属性store.getState()拿到数据，它是由
 ### action去声明变量，放在store中；
 ### 然后reducer就会去执行数据处理的逻辑；
 ### 通过dispatch传入一个action的方法，建立state与页面的连接；
 ### 页面在执行store.getState()方法的时候就可以获取到最新的state数据并进行展示；

注：react-redux可以更方便的在react使用redux数据管理；