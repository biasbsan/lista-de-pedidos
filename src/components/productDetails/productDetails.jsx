import { useState, useEffect } from 'react';

const ProductDetails = ( productId ) => {
  const [product, setProduct] = useState(null);

  // Hook para buscar os detalhes do produto da API
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Erro ao buscar detalhes do produto:', error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  if (!product) {
    return <div>Carregando detalhes do produto...</div>;
  }

  return (
    <div>
      <h2>Detalhes do Produto</h2>
      <div>
        <h3>{product.title}</h3>
        <img src={product.image} alt={product.title} />
        <p>Descrição: {product.description}</p>
        <p>Preço: ${product.price}</p>
      </div>
    </div>
  );
};

export default ProductDetails;