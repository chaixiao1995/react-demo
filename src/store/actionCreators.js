import { CHANGE_INPUT } from './types'

// react-thunk写法
export const changeInputAction = value => (dispatch) => {
  const action = {
    type: CHANGE_INPUT,
    value
  };
  dispatch(action);
}
// 非react-thunk写法
// export const changeInputAction = value => ({
//   type: CHANGE_INPUT,
//   value
// })