// 如果多人协作开发，各自的reducer可以放总的reducer中进行管理
import { combineReducers } from 'redux';
import testReducer from './redux';

const allReducers = combineReducers({
    testReducer
})

export default allReducers