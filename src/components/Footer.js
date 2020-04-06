import React from 'react'
import './Footer.css'

export default () => (
  <footer className="footer">
    <div className="container taCenter">
      <span>
        © Copyright {new Date().getFullYear()}. All rights reserved. Crafted by{' '}
        <a href="https:/sk-webdesign.pl/">SK Web Design</a>.
      </span>
    </div>
  </footer>
)
