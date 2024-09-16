import { INCREMENT, DECREMENT } from "./constants";

const initState = 0;
/**
 * countReducer
 * 1. 纯函数
 * 2. reducer函数会接到两个参数，分别为：之前的状态（preState）,动作对象（action）
 * 形参默认值 initState
 */
export default function countReducer(preState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case INCREMENT:
      return preState + data;
    case DECREMENT:
      return preState - data;
    default:
      return preState;
  }
}
