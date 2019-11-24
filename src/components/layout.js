import React from "react";
import PropTypes from "prop-types";
import { Footer } from "sld-component-library";
import Logo from "../images/mango.png";

const Layout = ({ children }) => {
  return (
    <div className="is-black-bg is-white pad-10" style={{ minHeight: "100vh" }}>
      <main>{children}</main>
      <footer className=" is-black-bg margin-2 footer">
        Site made with{" "}
        <span role="img" aria-label="love">
          ❤️
        </span>{" "}
        by{" "}
        <a
          href="https://sld.codes"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          sld.codes
        </a>
        <a
          className="link is-pink"
          href="https://www.buymeacoffee.com/lLj8yvRAk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>
            Buy me a coffee{" "}
            <span role="img" aria-label="coffee">
              ☕️
            </span>
            .
          </p>
        </a>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
