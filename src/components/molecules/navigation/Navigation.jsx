import React from "react";
import PropTypes from "prop-types";
import StyledNavigation from "./Navigation.styles";

import { ReactComponent as IconPlus } from "../../../assets/images/icons/plus.svg";
import { ReactComponent as IconBag } from "../../../assets/images/icons/shopping-bag.svg";
import { ReactComponent as IconCart } from "../../../assets/images/icons/shopping-cart.svg";
import { ReactComponent as IconUser } from "../../../assets/images/icons/user.svg";
import { ReactComponent as IconX } from "../../../assets/images/icons/x.svg";

const Icons = {
  bag: IconBag,
  cart: IconCart,
  plus: IconPlus,
  user: IconUser,
  x: IconX,
};

const Navigation = ({ direction, items }) => (
  <StyledNavigation direction={direction}>
    {items.map((item) => {
      return (
        <a href={item.url}>
          {item.icon ? (
            <NavigationIcon name={item.icon} title={item.title} />
          ) : (
            item.title
          )}
        </a>
      );
    })}
  </StyledNavigation>
);

Navigation.propTypes = {
  direction: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};

Navigation.defaultProps = {
  direction: "horizontal",
  items: [],
};

const NavigationIcon = ({ name, title }) => {
  if (Icons[name] === undefined) return null;

  const Icon = Icons[name];
  return (
    <span className="navigation__icon">
      {title && <span className="hidden">{title}</span>}
      <Icon />
    </span>
  );
};

NavigationIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Navigation;
