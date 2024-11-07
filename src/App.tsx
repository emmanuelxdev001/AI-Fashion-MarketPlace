import React from 'react';
import Footer from './components/Footer';
import Home from './pages/Home';
import Navbar from './components/Navbars';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default App;
