import React from "react";
import { Link } from "react-router-dom";
import "../css/user.css"; // You can move the CSS styles here


const Product = () => {
  const products = Array.from({ length: 112 }, (_, i) => ({
    id: i + 1,
    name: `Stamp ${i + 1}`,
    description: `This is a description for stamp ${
      i + 1
    }. A unique and rare collectible item.`,
    price: (i + 1) * 10,
    imageUrl: `https://www.stampworld.com/media/images/stamps/stamp_${
      i + 1
    }.jpg`,
  }));

  return (
    <div>
      <div className="taskbar">
        <h1>PanStamp eBuy</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
      <div className="main-container">
        <div className="left-sidebar">
          <div className="profile-pic"></div>
          <h2>Profile</h2>
          <div className="profile-info">
            <b>Surjit Kumar</b>
            <p>A philatelist, Chennai, India</p>
          </div>
          <div className="profile-stats">
            <div className="stat">
              <span className="count">250</span> Followers
            </div>
            <div className="stat">
              <span className="count">180</span> Following
            </div>
            <div className="stat">
              <span className="count">340</span> Profile Views
            </div>
          </div>
        </div>
        <div className="main-content">
          <div className="product-list">
            {products.map((product) => (
              <div key={product.id} className="product">
                <Link to={`/product/${product.id}`}>
                  <img src={product.imageUrl} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="price">₹{product.price.toFixed(2)}</div>
                  <button>View Details</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
