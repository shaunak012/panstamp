import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/user.css"; // You can move the CSS styles here


const Contact = () => {
  const [subject, setSubject] = useState("");
  const [details, setDetails] = useState("");
  const [attachment, setAttachment] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Subject:", subject);
    console.log("Details:", details);
    console.log("Attachment:", attachment);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* Taskbar */}
      <div style={styles.taskbar}>
        <h1>eBuy</h1>
        <nav style={styles.nav}>
          <Link to="/home1" style={styles.link}>Home</Link>
          <Link to="/products" style={styles.link}>Products</Link>
          <Link to="/contact" style={styles.link}>Contact</Link>
        </nav>
      </div>

      {/* Main Content */}
      <div style={styles.mainContainer}>
        {/* Left Sidebar */}
        <div style={styles.leftSidebar}>
          <div style={styles.profilePic}></div>
          <h2>Profile</h2>
          <div style={styles.profileInfo}>
            <b>Surjit Kumar</b>
            <p>A philatelist</p>
            <p>Chennai, India</p>
          </div>
          <div style={styles.profileStats}>
            <div style={styles.stat}>
              <span style={styles.count}>250</span> Followers
            </div>
            <div style={styles.stat}>
              <span style={styles.count}>180</span> Following
            </div>
            <div style={styles.stat}>
              <span style={styles.count}>340</span> Profile Views
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div style={styles.mainContent}>
          <div style={styles.formContainer}>
            <h2>Submit Your Feedback or Complaint</h2>
            <form onSubmit={handleFormSubmit}>
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Enter the subject"
                required
                style={styles.input}
              />

              <label htmlFor="details">Details:</label>
              <textarea
                id="details"
                name="details"
                rows="5"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Enter your feedback or complaint details"
                required
                style={styles.textarea}
              ></textarea>

              <label htmlFor="attachment" style={styles.fileLabel}>
                <span role="img" aria-label="paperclip" style={styles.fileIcon}>📎</span> Attach files (optional):
                <input
                  type="file"
                  id="attachment"
                  name="attachment"
                  style={{ display: "none" }}
                  onChange={(e) => setAttachment(e.target.files[0])}
                />
              </label>

              <button type="submit" style={styles.submitButton}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// Inline Styles
const styles = {
  taskbar: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 20px",
    backgroundColor: "#ff0000",
    color: "white",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 100,
  },
  nav: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "1em",
  },
  mainContainer: {
    display: "flex",
    marginTop: "60px",
    height: "calc(100vh - 60px)",
  },
  leftSidebar: {
    backgroundColor: "white",
    padding: "20px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    width: "250px",
    height: "100%",
    overflowY: "auto",
  },
  profilePic: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    backgroundColor: "#ccc",
    marginBottom: "20px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  profileInfo: {
    textAlign: "center",
    color: "#333",
  },
  profileStats: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  stat: {
    fontSize: "1em",
    color: "#555",
    margin: "10px 0",
  },
  count: {
    fontSize: "1.2em",
    color: "#ff0000",
    fontWeight: "bold",
  },
  mainContent: {
    flexGrow: 1,
    padding: "20px",
    overflowY: "auto",
  },
  formContainer: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "800px",
    margin: "0 auto",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
  },
  fileLabel: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    fontSize: "1em",
    backgroundColor: "#ff0000",
    color: "#ffffff",
    padding: "10px",
    borderRadius: "5px",
    marginBottom: "10px",
  },
  fileIcon: {
    fontSize: "1.2em",
    marginRight: "10px",
  },
  submitButton: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#ff0000",
    color: "#ffffff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1em",
  },
};

export default Contact;
