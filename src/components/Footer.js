import React from 'react'
import './Footer.css'

export default () => (
  <footer className="footer">
    <div className="container taCenter">
      <span>
        © Copyright {new Date().getFullYear()}. All rights reserved. Crafted by{' '}
        <a href="https://skvdesigns.com//">SK Web Designs</a>.
      </span>
    </div>
  </footer>
)
