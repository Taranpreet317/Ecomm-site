import { useState, useEffect } from 'react';
import Title from './Title';
import ProductItem from './ProductItem';
import axios from 'axios';

const BestSeller = () => {
  const [bestSeller, setBestSeller] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        const response = await axios.get('/api/products'); // Adjust the endpoint as needed
        const products = response.data;
        const bestProduct = products.filter((item) => item.bestseller);
        setBestSeller(bestProduct.slice(0, 5));
      } catch (err) {
        setError('Failed to fetch products');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBestSellers();
  }, []);

  if (loading) {
    return <p>Loading best sellers...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="my-10">
      <div className="py-8 text-3xl text-center">
        <Title text1="BEST" text2="SELLERS" />
        <p className="w-3/4 m-auto text-xs text-gray-600 sm:text-sm md:text-base">
          Our best sellers are a curated selection of top-rated items that have
          won over shoppers with their quality, style, and value.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6">
        {bestSeller.map((item) => (
          <ProductItem
            key={item._id}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
