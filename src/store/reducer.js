import * as types from './types'

const defaultState = {
  filterText: '',
  isStockOnly: false
}
export default (state = defaultState, action) => {
  if(action.type === types.CHANGE_INPUT){
    let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
    newState.filterText = action.value
    return newState
  }
  if(action.type === types.CHANGE_CHECK){
    let newState = JSON.parse(JSON.stringify(state))
    newState.isStockOnly = action.value
    return newState
  }
  return state
}