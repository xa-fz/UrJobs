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

const mapStatetoProps = (state) => {
  return {
    num: state
  }
}

const actionCreators = {
  add, addThunk
}

export default connect(mapStatetoProps, actionCreators)(App);
