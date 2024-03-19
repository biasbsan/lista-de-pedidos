/* eslint-disable react/prop-types */
import { useState } from 'react';
import ProductDetails from '../productDetails/productDetails';

const ProductCard = ({ product }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="product-card" onClick={toggleDetails}>
      <h3>{product.title}</h3>
      <p>Preço: ${product.price}</p>
      <img src={product.image} alt={product.title} />
      {showDetails && <ProductDetails productId={product.id} />}
    </div>
  );
};

export default ProductCard;