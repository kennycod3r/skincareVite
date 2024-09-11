// src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/home";
import Products from "./Pages/products";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import CheckoutPage from "./Pages/checkoutPage";
import BagPage from "./Pages/bagpage";
import Journal from "./Pages/journal";
import Contact from "./Pages/contact-page";
import KidsPage from "./Pages/kids-page";
import FavoritesPage from "./Pages/favoritespage";
import Sidebar from "./components/Sidebar/Sidebar";
import useLenis from "./hooks/UseLennis";
import Loading from "./Util/Loader/Loading";
import Bag from "./components/Bag/Bag";
import skincareData from "./Data/skincareData";
import { BagProvider } from "./Context/BagContext";
import { CheckoutProvider } from "./Context/CheckoutContext";
import { FavoritesProvider } from "./Context/FavoritesContext"; 

// ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  useLenis();
  const [isLoading, setIsLoading] = useState(true);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [bagOpen, setBagOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleSidebar = () => setOpenSidebar((prev) => !prev);
  const handleBagOpen = () => setBagOpen((prev) => !prev);

  if (isLoading) return <Loading />;

  return (
    <FavoritesProvider>
      <BagProvider>
        <CheckoutProvider>
          <Router>
            <ScrollToTop /> {/* This ensures scroll to top on navigation */}
            <div className="wrapper">
              <Header
                handleSidebar={handleSidebar}
                handleBagOpen={handleBagOpen}
                openSidebar={openSidebar}
              />
              <Sidebar openSidebar={openSidebar} handleSidebar={handleSidebar} />
              <Bag bagOpen={bagOpen} handleBagOpen={handleBagOpen} />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/journal" element={<Journal />} />
                <Route path="/products" element={<Products products={skincareData} />} />
                <Route
                  path="/products/:productId"
                  element={
                    <ProductDetail
                      products={skincareData}
                      handleBagOpen={handleBagOpen}
                    />
                  }
                />
                <Route path="/checkoutPage" element={<CheckoutPage />} />
                <Route path="/bag" element={<BagPage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
                <Route path="/contact-page" element={<Contact />} />
                <Route path="/kids-page" element={<KidsPage />} />
              </Routes>
              <Footer />
            </div>
          </Router>
        </CheckoutProvider>
      </BagProvider>
    </FavoritesProvider>
  );
};

export default App;
