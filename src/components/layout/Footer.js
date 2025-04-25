import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-300 text-sm">
              PenoPlatform is your comprehensive solution for all things
              pneumatics. We connect buyers, sellers, and technical experts in
              one place.
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-assistant"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  AI Assistant
                </Link>
              </li>
              <li>
                <Link
                  to="/marketplace"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  Marketplace
                </Link>
              </li>
              <li>
                <Link
                  to="/stores"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  Store Directory
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Email: info@penoplatform.com</li>
              <li>Phone: +98 21 1234 5678</li>
              <li>Address: Tehran, Iran</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-gray-300 text-sm text-center">
            © {new Date().getFullYear()} PenoPlatform. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
