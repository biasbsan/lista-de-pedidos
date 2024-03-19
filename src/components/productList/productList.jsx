import { useState, useEffect } from 'react';
import ProductCard from '../productCard/productCard';

// Componente para listar os produtos
const ProductList = () => {
  const [products, setProducts] = useState([]);

  // Hook para buscar os produtos da API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Erro:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Produtos Disponíveis</h2>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};


export default ProductList;