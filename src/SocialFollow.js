import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";


export default function SocialFollow() {
  
  return (
    <div >
      <h3>Social Follow</h3>
         <a href="#">
           <FontAwesomeIcon icon={faYoutube} size="2x" style={{color: "red"}}/>
        </a>
        <a href="#/">
           <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="#">
           <FontAwesomeIcon icon={faTwitter} size="2x" style={{color: "skyblue"}}/>
        </a>
        <a href="#">
            <FontAwesomeIcon icon={faInstagram} size="2x" style={{color: "gray"}}/>
        </a>
    </div>
  );
}