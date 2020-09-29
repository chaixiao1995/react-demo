import React, { Component } from 'react';
import Search from '../components/Search';
import ProductTable from '../components/ProductTable';
import store from '../store/index'
import * as types from '../store/types'
import { changeInputAction } from '../store/actionCreators'
import HookDemo from './hookDemo';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState()
    // 设置监听函数
    store.subscribe(this.storeChange)
  }
  changeFilterText = (filterText) => {
    // this.setState({filterText})

    // const action = {
    //   type: types.CHANGE_INPUT,
    //   value: filterText
    // }
    const action = changeInputAction(filterText)
    store.dispatch(action)
  }
  changeIsStockOnly = (isStockOnly) => {
    // this.setState({isStockOnly})
    store.dispatch({ type: types.CHANGE_CHECK, value: isStockOnly })
  }
  storeChange = () => {
    this.setState(store.getState())
  }
  render() {
    const products = [
      { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
      { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
      { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
      { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
      { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
      { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
    ];
    return (
      <div>
        <Search filterText={this.state.filterText} isStockOnly={this.state.isStockOnly} changeFilterText={this.changeFilterText} changeIsStockOnly={this.changeIsStockOnly} />
        <ProductTable products={products} filterText={this.state.filterText} isStockOnly={this.state.isStockOnly} />
        <HookDemo />
      </div>
    );
  }
}

export default List;
