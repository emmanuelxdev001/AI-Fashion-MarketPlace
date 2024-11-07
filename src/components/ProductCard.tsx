import React from 'react';

interface ProductCardProps {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, title, imageUrl, price }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">${price.toFixed(2)}</p>
      <button className="bg-blue-600 text-white py-2 px-4 rounded mt-4 w-full">
        View Details
      </button>
    </div>
  );
};

export default ProductCard;
