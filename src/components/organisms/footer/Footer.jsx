import React from "react";
import PropTypes from "prop-types";
import StyledFooter from "./Footer.styles";

import Navigation from "../../molecules/navigation/Navigation";

const Footer = ({ menus }) => (
  <StyledFooter>
    <div className="footer__contents">
      <div className="footer__wrapper">
        {menus.map(({ items, title }) => (
          <div className="footer__navigation" key={`footer-nav-${title}`}>
            {title && <h3 className="footer__heading">{title}</h3>}
            <Navigation direction="vertical" items={items} />
          </div>
        ))}
      </div>

      <div className="footer__newsletter">
        <h4 className="footer__heading">Join our newsletter</h4>
        <p>We will send you updates on new products and discounts.</p>
      </div>

      <nav className="footer__copyright">
        <p>Copyright &copy; Celtic Elements {new Date().getFullYear()}</p>
        <a
          href="https://facebook.com/c.baodien"
          rel="noopener noreferrer"
          target="_blank"
        >
          Website by Bao Dien
        </a>
      </nav>
    </div>
  </StyledFooter>
);

Footer.propTypes = {
  menus: PropTypes.arrayOf({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ),
    title: PropTypes.string,
  }),
};

Footer.defaultProps = {
  menus: [],
};

export default Footer;
