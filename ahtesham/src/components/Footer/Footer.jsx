import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
// import Insta from "@iconscout/react-unicons/icons/uil-instagram";
// import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
// import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>mahtesham432@gmail.com</span>

        <div className="f-icons">
        <a href="https://github.com/ahteshamweb"  ><img src={Github} alt="github"  /></a> 
        <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFVJrLH7gobtgAAAYRRxGvQo8YUsp93RMmz28t5WXOdNVeKC5RISfaHL_35LqLfymHhRNo2KEMaO_jkBlusdzUzOfz78NPl4MfF_CHcyKQTtwLgBhXe8nP64MBdFLiHRRdhsmQ=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fahtesham-dev-480046250"><img src={LinkedIn} alt="linkedin" />
        </a>
        <a href="https://www.instagram.com/p/Cj5tauvP9zY/?igshid=YmMyMTA2M2Y="><img src={Instagram} alt="insta"  />  </a> 
        </div>
  
      </div>
    </div>
  );
};

export default Footer;
