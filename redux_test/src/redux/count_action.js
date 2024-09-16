import { INCREMENT, DECREMENT } from "./constants";
/**
 * 该文件专门为Count组件生成action对象
 */
export const createIncrementAction = (data) => ({ type: INCREMENT, data });
export const createDecrementAction = (data) => ({ type: DECREMENT, data });
