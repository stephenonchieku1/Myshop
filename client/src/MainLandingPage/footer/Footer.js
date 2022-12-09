import React from 'react'
import "./Footer.css"


const Footer = () => {
  return (
    <>

    <div class="footer-wrap">
      <div className='footer-container'>
        <h3> Get To Know Us</h3>
        <ul>
          <li>careers</li>
          <li>Twitter</li>
          <li>About MyShop.com</li>
          <li>Social media</li>
          <li>Investor Relations</li>
        </ul>
      </div>

      <div className='footer-container'>
      <h3>MyShop.com Payment Options</h3>
        <ul>
          <li>MyShop.com Business Card</li>
          <li>Shop with Points</li>
          <li>Reload Your Balance</li>
          <li>MYShop.com Currency Converter</li>
        </ul>
      </div>

      <div className='footer-container'>
        <h3>Talk to us</h3>
        <ul>
          <li>tel:0797914328</li>
          <li>email:MyShop@gmail.com</li>
          <li>twitter@MyShop.com</li>
          <li>careers</li>
        </ul>
      </div>
    </div>
    <div className='legal'>
      <p>MyShop.com © 2022 All Rights Reserved.</p>
      <p> A Grid Solutions Software</p>

   
        </div>
  </>
  )
}

export default Footer
