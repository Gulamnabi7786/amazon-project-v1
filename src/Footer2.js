import React from "react";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import GitHubIcon from "@mui/icons-material/GitHub";
import "./Footer2.css";

function Footer2() {
  return (
    <div className="footer2">
      <div className="footer2Container">
        <div className="footer2socialMediaLink">
          <a href="https://www.instagram.com/invites/contact/?i=1hhhljxgtvhs2&utm_content=cn4fifb">
            {/* <InstagramIcon /> */}
            <img
              src="https://img.icons8.com/bubbles/50/ffffff/instagram-new--v2.png"
              alt=""
            />
          </a>
          <a href="https://www.facebook.com/gulamnabi.mundas">
            {/* <FacebookIcon /> */}
            <img
              src="https://img.icons8.com/fluency/48/000000/facebook-new.png"
              alt=""
            />
          </a>
          <a href="https://github.com/Gulamnabi7786">
            {/* <GitHubIcon /> */}
            <img
              src="https://img.icons8.com/color/48/000000/github--v3.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer2;
