import React, { Component } from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

class ProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() { 
    const filterText = this.props.filterText;
    const isStockOnly = this.props.isStockOnly;
    const rows = [];
    let prevCategory = '';

    this.props.products.forEach(product => {
      if(!product.name.includes(filterText)){
        return;
      }
      if(isStockOnly && !product.stocked) {
        return;
      }
      if(product.category !== prevCategory){
        // 新加类目
        rows.push(
          <ProductCategoryRow category={product.category} key={product.category} />
        )
      }
      rows.push(
        <ProductRow key={product.name} product={product} />
      )
      prevCategory = product.category
    })
    return (
      <table>
        <thead>
          <tr>
            <th>名称</th>
            <th>价格</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}
 
export default ProductTable;