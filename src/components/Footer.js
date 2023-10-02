import React from "react";
import "../css/Footer.css";
export default function Footer() {
  return (
    <div className="footer-section ">
      <div className="footer-section-copyright">
        <p>© 2023 - platinum ai </p>
      </div>
      <div className="footer-section-social">
        <div className="instagram">
          <a href="https://www.instagram.com/platinum.ai/">
            <img
              src="https://th.bing.com/th/id/OIP.DWugoLIiK6MIiv5sfToTQQAAAA?pid=ImgDet&rs=1"
              alt="instagram"
              className="instagram-icon"
            />
          </a>
        </div>
        <div className="facebook">
          <a href="https://www.youtube.com/@PlatinumAI911" target="_blank">
            <img
              src="https://th.bing.com/th/id/R.d615fcb54c8d0bc5d367cbba04bb8610?rik=fVRj7cvbxAp9TA&pid=ImgRaw&r=0"
              alt="instagram"
              className="instagram-icon"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
