import React, { Component } from "react";
import store from "../../redux/store";
// redux只负责管理状态，不负责页面更新
import {
  createIncrementAction,
  createDecrementAction,
} from "../../redux/count_action";
export default class Count extends Component {
  // componentDidMount() {
  //   // 检测redux中状态的变化，只要变化，就调用render
  //   store.subscribe(() => {
  //     this.setState({});
  //   });
  // }

  increment = () => {
    const { value } = this.selectNumber;
    store.dispatch(createIncrementAction(value * 1));
  };
  decrement = () => {
    const { value } = this.selectNumber;
    store.dispatch(createIncrementAction(value * 1));
  };
  incrementIfOdd = () => {
    const { value } = this.selectNumber;
    const count = store.getState();
    if (value % 2 !== 0) {
      store.dispatch(createIncrementAction(value * 1));
    }
  };
  // 异步加
  incrementAsync = () => {
    const { value } = this.selectNumber;
    setTimeout(() => {
      store.dispatch(createIncrementAction(value * 1));
    }, 500);
  };
  render() {
    return (
      <div>
        <h1>当前求和为:{store.getState()}</h1>
        <select ref={(c) => (this.selectNumber = c)}>
          &nbsp;
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和奇数加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    );
  }
}
