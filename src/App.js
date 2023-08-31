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

const App = () => {
  const [filteredProducts, setFilteredProducts] = useState(productData);
  const [filteredAddons, setFilteredAddons] = useState(addonData);

  const [productsClicked, setProductsClicked] = useState(false);
  const [addonsClicked, setAddonsClicked] = useState(false);
  const [understoodClicked, setUnderstoodClicked] = useState(false); // Track if "Understood" is clicked

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

  // Render the main app content only if "Understood" is clicked
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
    return null; // Render nothing if "Understood" is not clicked
  };

  return (
    <div className="app">
      <div className="background-image"></div>
      <header className="header">
        Quickbooks UpSeller v.0.2.1.0.2
      </header>

      {/* Understood Box */}
      {!understoodClicked && (
        <div className="understood-box">
           <div className="understood-content" style={{ textAlign: "justify" }}>
            <p>
              This version of the application is in its alpha stage. Currently, the data is generated directly from the training modules, so while it does completely mirror the real-time QuickBooks version as of today, this may not always be the case until I built a json builder for keeping it up to date. Due to this, even if it were entirely up to date, it's advisable to leverage your own understanding and utilize this tool as a supplementary resource rather than a replacement for your knowledge. As time progresses, I will enhance this application by introducing more features and updated information. The assistance section located at the bottom utilizes live extractions through my GoogleSearchWrapper.js. Please note that it will exclusively search pertinent indexed databases and not the unrestricted internet.
            </p>
            <p>
              Present Implementations: Product, Addon, Changelog, Help Desk Assistant. The Product is constructed based on the primary plans of QBO. Addons are developed using the available addon features for the Product. The Changelog comprises a record of the changes as they have taken place and been rolled out up to the current build.
            </p>
            <p>
            The Help Desk Assistant functions as a tailored search interface designed for retrieving information related to the custom wrapper and indexing. It's important to understand that I'm currently in the process of building the AI language model, continually utilizing the data gathered from the outcomes produced as people make use of the Help Desk Assistant. In the current iteration, an enhancement from Google has been integrated, allowing me to extract data from external help pages specifically related to QBO. This extracted data plays a pivotal role in training my personalized AI language model, empowering it to actively engage in conversations based on the information sourced from the index.
            </p>
            <p>
            While this remains an ongoing effort, it's crucial to emphasize that the outcomes within this section are consistently current and presented in real-time, adapting as new data is integrated. Furthermore, I want to clarify that the advertisement section within the interface is optional. However, it's important to note that without generated income, I am currently unable to subscribe to ad-free services. The advertisement space has been intentionally separated, ensuring that the ads are positioned at the top of the results. This layout allows users to easily scroll past the advertisements and access the "real results" section situated below them.
            </p>
          </div>
          <button className="understood-button" onClick={handleUnderstoodClick}>Understood</button>
        </div>
)}

      {/* Render main app content only if "Understood" is clicked */}
      {renderMainApp()}

      {/* Header for GoogleSearchWrapper section */}
      <div className="google-search-header">
        <h2 className="section-heading">Help Desk Assistant</h2>
      </div>

      <GoogleSearchWrapper />

      <footer className="footer">&copy; 2023 Quikdagger Coding. All rights reserved.</footer>
    </div>
  );
};

export default App;
