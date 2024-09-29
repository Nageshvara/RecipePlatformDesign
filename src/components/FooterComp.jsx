import React from 'react';
import '../App.css';
import { Footer } from 'antd/es/layout/layout';

const Footercomp = () => {
  return (
    <Footer className='footersection'>
      <div className='icons'>
        <span className='footer-link'>Privacy Policy</span>
        <span className='footer-link'>Licensing</span>
        <span className='footer-link'>Contact</span>
      </div>
    </Footer>
  );
}

export default Footercomp;
