'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import React, { useState, useEffect } from 'react';

const Home: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [cartModelVisibility, setCartModelVisibility] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://67913f55af8442fd737989a0.mockapi.io/api/zoshka/ecommerceweb');
        if (!res.ok) {
          throw new Error(`Failed to fetch data: ${res.statusText}`);
        }
        const fetchedData = await res.json();
        setData(fetchedData);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleAddToCart = () => {
    setCartModelVisibility(true);
  };

  const closeModel = () => {
    setCartModelVisibility(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-slate-900 px-4">
      <Header />
      <div className="text-center mb-10">
        <h1 className="text-4xl font-old text-yellow-400">Welcome to Mock API Fetch Data Project</h1>
        <p className="text-xl text-white mt-2 mb-4">Explore the product</p>
      </div>
      {loading && <p className="text-center text-yellow-400">Loading ...</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center max-w-6xl mx-auto">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow rounded-lg overflow-hidden transition-transform hover:scale-105 duration-300 max-w-xs mx-auto"
          >
            <div className="relative w-full h-56">
              <img
                src={item.image}
                alt={item.productname}
                className="w-full h-full object-contain rounded-t-lg bg-gray-100"
              />
              <div className="absolute top-2 left-2 bg-red-500 text-white py-1 px-3 text-xs font-semibold rounded-full shadow-md">
                {item.discount} % OFF
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-slate-800">{item.productname}</h2>
              <p className="text-sm text-slate-600 mt-1">{item.productdes}</p>

              <div className="mt-4 space-y-2">
                <div className="flex justify-between items-center text-lg text-slate-900">
                  <span className="font-semibold text-[#B88E2F]">Price:</span>
                  <span className="text-xl font-bold text-slate-800">{item.discount} Rupess</span>
                </div>

                <div className="flex justify-between items-center text-lg text-slate-900">
                  <span className="text-lg">Rating:</span>
                  <span className="text-yellow-500">{item.rating} %⭐</span>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="mt-4 bg-blue-600 text-white rounded-lg py-2 px-4 text-base font-semibold transition-all duration-300 ease-in-out hover:bg-blue-700"
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {cartModelVisibility && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg w-96">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Product Added To Cart</h2>
            <p className="text-slate-600 mb-6">
              You have added a product to your cart. Would you like to view your cart?
            </p>
            <div className="flex space-x-4">
              <button
                onClick={closeModel}
                className="bg-slate-300 text-black px-4 py-2 rounded-lg hover:bg-amber-400 transition-colors font-bold"
              >
                Continue Shopping
              </button>
              <button
                onClick={() => alert('Navigating To Cart ...')}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                View Cart
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Home;
