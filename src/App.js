import React, { useState, useEffect } from 'react';
import './App.css';
import Product from './Product';
import Addon from './Addon';
import Changelog from './Changelog';
import SearchBar from './SearchBar';
import productData from './products.json';
import addonData from './addons.json';
import changelogData from './changelog.json';
import GoogleSearchWrapper from './GoogleSearchWrapper';
import UnderstandBox from './UnderstandBox'; 

const App = () => {
  const [filteredProducts, setFilteredProducts] = useState(productData);
  const [filteredAddons, setFilteredAddons] = useState(addonData);

  const [productsClicked, setProductsClicked] = useState(false);
  const [addonsClicked, setAddonsClicked] = useState(false);
  const [understoodClicked, setUnderstoodClicked] = useState(false);

  const handleProductSearch = (filteredProducts) => {
    setFilteredProducts(filteredProducts);
  };

  const handleAddonSearch = (filteredAddons) => {
    setFilteredAddons(filteredAddons);
  };

  const handleProductsClick = () => {
    setProductsClicked(!productsClicked);
  };

  const handleAddonsClick = () => {
    setAddonsClicked(!addonsClicked);
  };

  const handleUnderstoodClick = () => {
    setUnderstoodClicked(true);
  };

  const renderMainApp = () => {
    if (understoodClicked) {
      return (
        <div className="content">
          <div className={`product-section ${productsClicked ? 'clicked' : ''}`}>
            <h2 className="section-heading" onClick={handleProductsClick}>Products</h2>
            <SearchBar data={filteredProducts} onDataSearch={handleProductSearch} />
            <div className="product-list">
              {filteredProducts.map((product, index) => (
                <Product key={index} name={product.name} features={product.features} />
              ))}
            </div>
          </div>

          <div className={`addon-section ${addonsClicked ? 'clicked' : ''}`}>
            <h2 className="section-heading" onClick={handleAddonsClick}>Addons</h2>
            <SearchBar data={filteredAddons} onDataSearch={handleAddonSearch} />
            <div className="addon-list">
              {filteredAddons.map((addon, index) => (
                <Addon key={index} name={addon.name} features={addon.features} />
              ))}
            </div>
          </div>

          <div className="changelog-section">
            <Changelog entries={changelogData} />
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="app">
      <div className="background-image"></div>
      <header className="header">
        Quickbooks UpSeller v.0.2.1.0.2
      </header>

      {!understoodClicked && (
        <UnderstandBox handleUnderstoodClick={handleUnderstoodClick} /> 
      )}

      {renderMainApp()}

      <div className="google-search-header">
        <h2 className="section-heading">Help Desk Assistant</h2>
      </div>

      <GoogleSearchWrapper />

      <footer className="footer">&copy; 2023 Quikdagger Coding. All rights reserved.</footer>
    </div>
  );
};

export default App;