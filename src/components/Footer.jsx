import React from "react";
import "../css/Footer.css";
import {
  FacebookOutlined,
  Twitter,
  Instagram,
  Google,
  LinkedCameraOutlined,
  WhatsApp,
} from "@mui/icons-material";
const Footer = () => {
  return (
    <div className="footer">
      <p>Privacy Policy</p>
      <p>Terms & Conditions</p>
      <p>Contact us</p>
      <p>All Copyrights Reserved @ MAI</p>
      <p>
        Social Networks@
        <FacebookOutlined />
        <Twitter />
        <Instagram />
        <Google />
        <LinkedCameraOutlined />
        <WhatsApp />
      </p>
    </div>
  );
};

export default Footer;
