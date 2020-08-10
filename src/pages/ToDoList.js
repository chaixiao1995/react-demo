// 使用react-redux
import React, { Component } from 'react';
import { connect } from 'react-redux'

class ToDoList extends Component {
  render() {
    let { inputValue, changeInput, clickBtn, list } = this.props
    return (
      <div>
        <div>
          <input value={inputValue} onChange={changeInput} />
          <button onClick={clickBtn}>增加</button>
        </div>
        <div>
          <ul>
            {
              list.map((item, index) => {
                return (<li key={index}>{item}</li>)
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}
// 映射关系
const stateToProps = state => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}
const dispatchToProps = dispatch => {
  return {
    changeInput(e) {
      const action = {
        type: 'input_change',
        value: e.target.value
      }
      dispatch(action)
    },
    clickBtn() {
      const action = {
        type: 'addList'
      }
      dispatch(action)
    }
  }
}

export default connect(stateToProps, dispatchToProps)(ToDoList);
