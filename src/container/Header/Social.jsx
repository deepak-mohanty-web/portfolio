import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";

function Social() {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/deepak-kumar-mohanty-14458925b"
        className="home__social-icon"
        target="_blank"
      >
        <FaLinkedin className="social__icon"></FaLinkedin>
      </a>

      <a
        href="https://github.com/erdeepak420"
        className="home__social-icon"
        target="_blank"
      >
        <FaGithub className="social__icon"></FaGithub>
      </a>

      <a
        href="https://www.instagram.com/er.__deep.__/"
        className="home__social-icon"
        target="_blank"
      >
        <FaInstagram className="social__icon"></FaInstagram>
      </a>
    </div>
  );
}

export default Social
