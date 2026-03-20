import React from 'react';

// Footer Component
// Simple footer with copyright
function Footer() {
  // Get current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        {/* Copyright Text */}
        <p>
          © {currentYear} <span style={{ color: '#6c63ff' }}>Jobin J</span>. 
          All rights reserved.
        </p>
        
       
      </div>
    </footer>
  );
}

export default Footer;
