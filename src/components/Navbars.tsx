import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">AI Fashion Marketplace</h1>
        <div>
          <a href="/" className="px-4">Home</a>
          <a href="/collections" className="px-4">Collections</a>
          <a href="/about" className="px-4">About</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
