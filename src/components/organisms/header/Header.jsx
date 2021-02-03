import React, { useState } from "react";
import PropTypes from "prop-types";
import StyledHeader from "./Header.styles";

import Logo from "../../../assets/images/logo.png";
import Button from "../../atoms/button/Button";
import Navigation from "../../molecules/navigation/Navigation";

const Header = ({ navigation }) => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = (e) => {
    e.preventDefault();
    setOpen(!isOpen);
  };

  return (
    <StyledHeader className={isOpen ? `header--open` : `header--closed`}>
      <div className="header__navigation">
        {navigation.length > 0 &&
          navigation.map(({ items, title }) => (
            <Navigation items={items} key={`header-menu-${title}`} />
          ))}
      </div>
      <img src={Logo} alt="Celtic Elements Logo" />
      <Button onClick={toggleMenu}>{isOpen ? `Hide` : `Show`} menu</Button>
    </StyledHeader>
  );
};

// Header.PropTypes = {};

// Header.defaultProps = {};

export default Header;
