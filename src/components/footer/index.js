import React from 'react'
import '../../styles/footer.scss'

import Logo from '../../img/navbar_logo.svg'
import { Social } from '../social'

export const Footer = () => {
  return (
    <div>
      <div className="top_footer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 222.29">
          <g>
            <g>
              <path d="M0,222.29S547.82,11.93,1248.06.64C1867.75-9.36,1920,101.3,1920,101.3v121Z"></path>
            </g>
          </g>
        </svg>
      </div>
      <div className="footer_wrapper">
        <div className="container_wrapper">
          <div className="box_wrapper">
            <div className="box_wrapper_left">
              <a href="#" className="logo">
                <img src={Logo} alt="logo_img" />
              </a>
              <p>hello@redq.io</p>
              <p>123-456-7890</p>
              <Social />
            </div>
            <div className="box_wrapper_right">
              <div className="Box_col">
                <h3>ABOUT US</h3>
                <ul>
                  <li>
                    <a href="/interior#">Support Center</a>
                  </li>
                  <li>
                    <a href="/interior#">Customer Support</a>
                  </li>
                  <li>
                    <a href="/interior#">About Us</a>
                  </li>
                  <li>
                    <a href="/interior#">Copyright</a>
                  </li>
                  <li>
                    <a href="/interior#">Popular Campaign</a>
                  </li>
                </ul>
              </div>
              <div className="Box_col">
                <h3>OUR INFORMATION</h3>
                <ul>
                  <li>
                    <a href="/interior#">Return Policy</a>
                  </li>
                  <li>
                    <a href="/interior#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/interior#">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="/interior#">Site Map</a>
                  </li>
                  <li>
                    <a href="/interior#">Store Hours</a>
                  </li>
                </ul>
              </div>
              <div className="Box_col">
                <h3>MY ACCOUNT</h3>
                <ul>
                  <li>
                    <a href="/interior#">Press inquiries</a>
                  </li>
                  <li>
                    <a href="/interior#">Social media directories</a>
                  </li>
                  <li>
                    <a href="/interior#">Images &amp; B-roll</a>
                  </li>
                  <li>
                    <a href="/interior#">Permissions</a>
                  </li>
                  <li>
                    <a href="/interior#">Speaker requests</a>
                  </li>
                </ul>
              </div>
              <div className="Box_col">
                <h3>POLICY</h3>
                <ul>
                  <li>
                    <a href="/interior#">Application security</a>
                  </li>
                  <li>
                    <a href="/interior#">Software principles</a>
                  </li>
                  <li>
                    <a href="/interior#">Unwanted software policy</a>
                  </li>
                  <li>
                    <a href="/interior#">Responsible supply chain</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p className="text_wrapper">copyright 2019 @RedQ</p>
          <p>Built & designed with</p>
        </div>
      </div>
    </div>
  )
}
