import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';

const Products = () => {
  const [products]  = useState(productsData);

  return (
    <section>
      {products.map(products => <Product key={products.id} title={products.title} price={products.basePrice} />)}
    </section>
  );
};


export default Products;