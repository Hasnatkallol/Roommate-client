import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook, FaGithub, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900  text-white w-full  p-10">
      <div className="footer  mx-auto flex flex-col  md:flex-row justify-between gap-8">
        <div>
          <div>
            <img src="/logo.svg" className="w-15 h15" alt="" />
          </div>
          <p>
            Helping you find the perfect roommate by matching based on
            lifestyle, location, and budget.
          </p>
        </div>

        {/* Contact Details */}
        <div>
          <span className="footer-title">Contact</span>
          <a className="link link-hover">support@.com</a>
          <a className="link link-hover">01705132021</a>
          <a className="link link-hover">7 Rasta ,ejgaon, Dhaka</a>
        </div>

        {/* Terms and Links */}
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms & Conditions</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Community Guidelines</a>
        </div>

        {/* Social Media */}
        <div>
          <span className="footer-title">Follow Us</span>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.facebook.com/programmingHero" target="_blank">
              <FaFacebook className="hover:text-green-500" size={25} />
            </a>
            <a
              href="https://github.com/Hasnatkallol?tab=repositories"
              target="_blank"
            >
              <FaGithub
                className="hover:text-green-500"
                href="/yourlink.html"
                target="_blank"
                size={25}
              />
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <FaYoutube
                className="hover:text-green-500"
                href="/yourlink.html"
                target="_blank"
                size={25}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/hasnat-kallol-86b82b348/"
              target="_blank"
            >
              <CiLinkedin
                className="hover:text-green-500"
                href="/"
                target="_blank"
                size={25}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
