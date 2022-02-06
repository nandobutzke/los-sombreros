
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Products } from './pages/Products';

import GlobalStyles from './styles/global';
import { Footer } from './components/Footer';
import { Cart } from './pages/Cart';
import { CartProvider } from './hooks/useCart';
import { ToastContainer } from 'react-toastify';
import { ReactModal } from './components/AddressModal';

function App() {
  return (
    <Router>
        <CartProvider>
            <GlobalStyles />
            <ReactModal />
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
            <ToastContainer autoClose={3000} />
            <Footer />
        </CartProvider>
      </Router>
  );
}

export default App;
