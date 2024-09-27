import React from 'react';
import { Link } from 'react-router-dom';
import "../css/user.css"; // You can move the CSS styles here


const Home1 = () => {
  return (
    <div>
      <div className="taskbar">
        <h1>Pan Stamp</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>
      </div>
      <div className="main-container">
        <div className="left-sidebar">
          <h2>News Articles</h2>
          <div className="news-item">
            <img src="news1.jpg" alt="News 1" className="news-img" />
            <div className="news-content">
              <h4>News Title 1</h4>
              <p>Brief description of the news article content.</p>
            </div>
          </div>
          {/* Repeat for other news items */}
        </div>
        <div className="center-container">
          <div className="profile-box">
            <div className="profile-info">
              <div className="profile-pic"></div>
              <div className="profile-details">
                <strong>Surjit Kumar</strong><br />
                A philatelist
              </div>
            </div>
            <div className="message-bar">
              <input type="text" id="messageInput" placeholder="Type a message" />
              <label htmlFor="imageInput">📎</label>
              <input type="file" id="imageInput" style={{ display: 'none' }} />
              <button>Send</button>
            </div>
          </div>
          <div className="posts" id="posts"></div>
        </div>
        <div className="right-sidebar">
          <div className="profile-pic-large"></div>
          <h2>Surjit Kumar</h2>
          <div className="profile-info">
            <p> A philatelist, Chennai, India</p>
          </div>
          <div className="stats">
            <div><strong>250</strong> Followers</div>
            <div><strong>180</strong> Following</div>
            <div><strong>45</strong> Profile Views</div>
          </div>
          <button>Groups</button>
          <button>Chats</button>
        </div>
      </div>
    </div>
  );
};

export default Home1;
