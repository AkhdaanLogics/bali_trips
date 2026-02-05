import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Dashboard from "./components/Dashboard";
import Destinations from "./components/Destinations";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Success from "./components/Success";
import Profile from "./components/Profile";
import Footer from "./Footer";

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [pageData, setPageData] = useState(null);
  const [cart, setCart] = useState([]);

  const navigate = (page, data = null) => {
    setCurrentPage(page);
    setPageData(data);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const addToCart = (item) => {
    // Check if item already exists
    const existingIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
    if (existingIndex >= 0) {
      // Update existing item
      const newCart = [...cart];
      newCart[existingIndex] = {
        ...newCart[existingIndex],
        guests: newCart[existingIndex].guests + (item.guests || 1),
      };
      setCart(newCart);
    } else {
      // Add new item
      setCart([...cart, item]);
    }
  };

  const updateCartItem = (updatedItem) => {
    const newCart = cart.map((item) =>
      item.id === updatedItem.id ? updatedItem : item,
    );
    setCart(newCart);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const clearCart = () => {
    setCart([]);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <Dashboard onNavigate={navigate} cart={cart} />;
      case "destinations":
        return (
          <Destinations
            onNavigate={navigate}
            onAddToCart={addToCart}
            selectedDestId={pageData}
          />
        );
      case "cart":
        return (
          <Cart
            cart={cart}
            onUpdateCart={updateCartItem}
            onRemoveFromCart={removeFromCart}
            onNavigate={navigate}
          />
        );
      case "checkout":
        return (
          <Checkout
            cart={cart}
            total={pageData?.total || 0}
            onNavigate={navigate}
            onClearCart={clearCart}
          />
        );
      case "success":
        return <Success onNavigate={navigate} orderData={pageData} />;
      case "profile":
        return <Profile onNavigate={navigate} />;
      default:
        return <Dashboard onNavigate={navigate} cart={cart} />;
    }
  };

  return (
    <div className="min-h-screen text-slate-900">
      <Navbar onNavigate={navigate} cart={cart} currentPage={currentPage} />
      {renderPage()}
      {currentPage !== "checkout" && currentPage !== "success" && <Footer />}
    </div>
  );
}

export default App;
