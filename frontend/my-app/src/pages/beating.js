import React, { useState, useEffect } from "react";
import "../css/user.css"; // You can move the CSS styles here

const Taskbar = () => (
  <div className="taskbar">
    <h1>eBuy</h1>
    <nav>
      <a href="/main">Home</a>
      <a href="/products">Products</a>
      <a href="/contact">Contact</a>
    </nav>
  </div>
);

const ProductDetails = ({ product }) => (
  <div className="product-details">
    <img src={product.image} alt="Product" />
    <h2>{product.title}</h2>
    <p className="description">{product.description}</p>
    <div className="price">₹{product.price}</div>
  </div>
);

const QuoteForm = ({ topQuote, onSubmitQuote }) => {
  const [quotePrice, setQuotePrice] = useState("");
  const [quoteMessage, setQuoteMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const quote = parseFloat(quotePrice);
    onSubmitQuote(quote, quoteMessage);
  };

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <label htmlFor="quotePrice">Quote your price:</label>
      <input
        type="number"
        id="quotePrice"
        name="quotePrice"
        value={quotePrice}
        onChange={(e) => setQuotePrice(e.target.value)}
        placeholder="Enter your price"
        required
      />
      <label htmlFor="quoteMessage">Message (optional):</label>
      <textarea
        id="quoteMessage"
        name="quoteMessage"
        value={quoteMessage}
        onChange={(e) => setQuoteMessage(e.target.value)}
        rows="4"
        placeholder="Enter any additional details"
      />
      <button type="submit">Submit Quote</button>
    </form>
  );
};

const RankingList = ({ rankings }) => (
  <div className="ranking">
    <h3>Top 10 Rankings</h3>
    <ul>
      {rankings.map((rank, index) => (
        <li key={index}>
          <span className="user">
            {index + 1}. {rank.user}
          </span>
          <span className="price">₹{rank.price}</span>
        </li>
      ))}
    </ul>
  </div>
);

const PaymentBox = ({ show, onCompletePurchase }) =>
  show && (
    <div className="payment-box">
      <h3>Congratulations!</h3>
      <p>
        Your quote is the highest. You are eligible to purchase this product.
      </p>
      <button onClick={onCompletePurchase}>Proceed to Payment</button>
    </div>
  );

const Countdown = ({ countdownTime }) => {
  const minutes = Math.floor(countdownTime / 60);
  const seconds = countdownTime % 60;
  return (
    <div className="countdown">
      Time remaining: {minutes}:{seconds < 10 ? "0" : ""}
      {seconds}
    </div>
  );
};

const ProductPage = () => {
  const [product, setProduct] = useState({});
  const [rankings, setRankings] = useState([
    { user: "Alice", price: 150 },
    { user: "Bob", price: 140 },
    { user: "Charlie", price: 130 },
  ]);
  const [topQuote, setTopQuote] = useState(150);
  const [userQuote, setUserQuote] = useState(null);
  const [countdownTime, setCountdownTime] = useState(60); // 1 minute in seconds
  const [showPaymentBox, setShowPaymentBox] = useState(false);

  useEffect(() => {
    // Extract productId from URL (In real app, you'd fetch this info from an API)
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    // Dummy product details
    const productData = {
      image: `https://www.stampworld.com/media/images/stamps/stamp_${productId}.jpg`,
      title: `Stamp ${productId}`,
      description: `This is a description for stamp ${productId}. A unique and rare collectible item.`,
      price: (productId * 10).toFixed(2),
    };

    setProduct(productData);

    // Countdown logic
    const countdownInterval = setInterval(() => {
      setCountdownTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(countdownInterval);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  const handleSubmitQuote = (quotePrice) => {
    if (quotePrice > topQuote) {
      setUserQuote(quotePrice);
      setTopQuote(quotePrice);
      setShowPaymentBox(true);
    } else {
      alert("Your quote is not the highest. Try again!");
    }
  };

  const completePurchase = () => {
    alert("Proceeding to payment...");
    // Handle the payment process here
  };

  return (
    <div>
      <Taskbar />
      <div className="main-container">
        <ProductDetails product={product} />
        <QuoteForm topQuote={topQuote} onSubmitQuote={handleSubmitQuote} />
        <RankingList rankings={rankings} />
        <PaymentBox
          show={showPaymentBox}
          onCompletePurchase={completePurchase}
        />
        <Countdown countdownTime={countdownTime} />
      </div>
    </div>
  );
};

export default ProductPage;
