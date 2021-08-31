import './App.css';
import { add, addThunk } from './redux.jsx';
import { Button } from 'antd-mobile';

function App(props) {
  const store = props.store;
  const num = store.getState();
  return (
    <div className="App">
      <div>{num}</div>
      <Button type="primary" onClick={() => store.dispatch(add())}>点我</Button>
      <Button type="primary" onClick={() => store.dispatch(addThunk())}>点我</Button>
    </div>
  );
}

export default App;
