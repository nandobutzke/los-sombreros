
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Products } from './pages/Products';

import './styles/global.scss';
import { Footer } from './components/Footer';
import { Cart } from './pages/Cart';
import { CartProvider } from './hooks/useCart';

function App() {
  return (
    <Router>
        <CartProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footer />
        </CartProvider>
      </Router>
  );
}

export default App;
