import React from "react";
import PropTypes from "prop-types";
import StyledButton, { StyledLinkButton } from "./Button.styles";

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

const Button = ({ children, href, onClick, icon, variant }) => {
  if (!href) {
    return (
      <StyledButton onClick={onClick} variant={variant}>
        {icon && <ButtonIcon name={icon} />}
        {children}
      </StyledButton>
    );
  }
  return (
    <StyledLinkButton href={href} variant={variant}>
      {icon && <ButtonIcon name={icon} />}
      {children}
    </StyledLinkButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.string,
};

Button.defaultProps = {
  variant: "primary",
};

const ButtonIcon = ({ name }) => {
  if (Icons[name] === undefined) return null;

  const Icon = Icons[name];
  return (
    <span className="button__icon">
      <Icon />
    </span>
  );
};

ButtonIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;

/**
 * Primary UI component for user interaction
 */
// export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
//   const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
//   return (
//     <button
//       type="button"
//       className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
//       style={backgroundColor && { backgroundColor }}
//       {...props}
//     >
//       {label}
//     </button>
//   );
// };

// Button.propTypes = {
//   /**
//    * Is this the principal call to action on the page?
//    */
//   primary: PropTypes.bool,
//   /**
//    * What background color to use
//    */
//   backgroundColor: PropTypes.string,
//   /**
//    * How large should the button be?
//    */
//   size: PropTypes.oneOf(['small', 'medium', 'large']),
//   /**
//    * Button contents
//    */
//   label: PropTypes.string.isRequired,
//   /**
//    * Optional click handler
//    */
//   onClick: PropTypes.func,
// };

// Button.defaultProps = {
//   backgroundColor: null,
//   primary: false,
//   size: 'medium',
//   onClick: undefined,
// };
