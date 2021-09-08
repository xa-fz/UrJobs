import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import allReducers from './reducers';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Auth from './Auth/auth';
import Dashboard from './Dashboard/dashboard';

const store = createStore(allReducers, applyMiddleware(thunk));

// function render () {
//   ReactDOM.render(
//     <React.StrictMode>
//       <App store={store} />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// }
// render()
// store.subscribe(render)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Switch>
          {/*渲染第一个匹配到的路由*/}
          <Route path="/login" component={Auth} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
