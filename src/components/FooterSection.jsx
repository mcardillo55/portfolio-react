import React from 'react';
import SocialSection from './SocialSection';

const FooterSection = () => {
  return(  
    <footer class="footer" id="footer">
        <div class="container text-center text-muted" id="footer-container">
            <div class="col-md-4">
                San Francisco, California &#8226; {new Date().getFullYear()}
            </div>
            <SocialSection />
        </div>
    </footer>
  )
};

export default FooterSection;