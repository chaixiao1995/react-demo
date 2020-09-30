import React, { Component } from 'react';
import styles from '../pages/style.scss';

console.log(styles)

class ProductRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() { 
    const product = this.props.product;
    const name = product.stocked ? product.name : <span style={{color: 'red'}}>{product.name}</span>
    return ( 
      <tr className={styles.green}>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}
 
export default ProductRow;