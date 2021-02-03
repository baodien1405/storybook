import React from "react";
import PropTypes from "prop-types";

import StyledBanner from "./Banner.styles";

import ParseHTML from "../../particles/parseHTML";

import Button from "../../atoms/button/Button";

const Banner = (props) => {
  const { content, cta, title } = props;

  return (
    <StyledBanner {...props} className="banner">
      <div className="banner__contents">
        {title && <h2 className="banner__title">{title}</h2>}
        {content && <div className="banner__content">{ParseHTML(content)}</div>}
        {cta && cta.title && cta.title !== "" && (
          <footer className="banner__footer">
            <Button href={cta.url} target={cta.target}>
              {cta.title}
            </Button>
          </footer>
        )}
      </div>
    </StyledBanner>
  );
};

Banner.propTypes = {
  cta: PropTypes.shape({
    target: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
  }),
  content: PropTypes.string.isRequired,
  title: PropTypes.string,
  variant: PropTypes.string.isRequired,
};

Banner.defaultProps = {
  content: "",
  variant: "primary",
};

export default Banner;
