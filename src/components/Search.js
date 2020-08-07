import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  changeFilterText = (e) => {
    this.props.changeFilterText(e.target.value)
  }
  changeIsStockOnly = (e) => {
    this.props.changeIsStockOnly(e.target.checked)
  }
  render() { 
    return (
      <form>
        <input type="text" value={this.props.filterText}  placeholder="请输入搜索条件..." onChange={this.changeFilterText}/>
        <div>
          <input type="checkbox" checked={this.props.isStockOnly} onChange={this.changeIsStockOnly}/>
          {' '}
          只展示有库存的商品
        </div>
      </form>
    );
  }
}
 
export default Search;