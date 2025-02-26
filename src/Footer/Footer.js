import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={`${styles.Footer_Container}`}>
      <h2>&copy; By Jagadeesh</h2>
         <div>

            <a href="mailto:vyomanautjagadeesh@gmail.com"><img className={`${styles.footerImg}`} src="https://cdn-icons-png.flaticon.com/128/5968/5968534.png" alt=" gmail"/></a>

            <a href="https://github.com/Jagadeeshbariki?tab=repositories"><img className={`${styles.footerImg}`} src="https://cdn-icons-png.flaticon.com/128/270/270798.png" alt=" GitHub"/></a>

            <a href="https://www.linkedin.com/in/jagadeesh-bariki-883b1122a/"> <img className={`${styles.footerImg}`} src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt=" Linkedin"/></a>

            <a href="https://www.instagram.com/vyomanautjagadeesh/"><img className={`${styles.footerImg}`} src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png" alt="Instagram"/></a>

            <a href="https://api.whatsapp.com/send?phone=916300963789"><img className={`${styles.footerImg}`} src="https://cdn-icons-png.flaticon.com/128/4423/4423697.png" alt=" Whats App"/></a>
         </div>
    </div>
  );
}

export default Footer;
