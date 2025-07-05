import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EditProduct from './pages/EditProduct';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Header */}
        <header style={{ textAlign: 'center', padding: '20px 0', backgroundColor: '#f3f4f6', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
          <h1 style={{ margin: 0 }}>🛍️ Local Store</h1>
        </header>

        {/* Page Content */}
        <main style={{ flex: '1' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edit/:id" element={<EditProduct />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
