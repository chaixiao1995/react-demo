import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/** 未使用react-redux    start********/
import List from './pages/list'
ReactDOM.render(
  <List />,
  document.getElementById('root')
);
/** 未使用react-redux    end**********/


/*************使用react-redux************* start*/
// import { Provider } from 'react-redux'
// import store from './store'
// import ToDoList from './pages/ToDoList'

// const App = (
//   <Provider store={store}>
//     <ToDoList />
//   </Provider>
// )
// ReactDOM.render(
//   App,
//   document.getElementById('root')
// )
/*************使用react-redux************* end*/
