import './App.css';
import { add, addThunk } from './redux.jsx';
import { Button } from 'antd-mobile';
import { connect } from 'react-redux';

function App(props) {
  // const store = props.store;
  // const num = store.getState();
  return (
    <div className="App">
      <div>{props.num}</div>
      <Button type="primary" onClick={() => props.add()}>点我</Button>
      <Button type="primary" onClick={() => props.addThunk()}>点我</Button>
    </div>
  );
}
// state属性值
const mapStatetoProps = (state) => {
  const { testReducer } = state;
  return {
    num: testReducer.counter
  }
}
// 方法
const actionCreators = {
  add, addThunk
}

export default connect(mapStatetoProps, actionCreators)(App);
