//创建redux中最为核心的store对象
import { legacy_createStore as createStore} from 'redux'
// 引入为Count组件服务的reducer
import countReducer from "./count_reducer";

createStore(countReducer);

export default createStore(countReducer);
