import React from "react";
import PropTypes from "prop-types";
import StyledRelated from "./Related.styles";

import ParseHTML from "../../particles/parseHTML";

import Intro from "../../molecules/intro/Intro";

const Related = ({ intro, items, variant }) => {
  if (!items) return null;

  if (!items.length) return null;

  return (
    <StyledRelated className="related" variant={variant}>
      <div className="related__contents">
        <Intro {...intro} />
        <div className="related__items">
          {items.map((item) => (
            <RelatedItem {...item} variant={variant} />
          ))}
        </div>
      </div>
    </StyledRelated>
  );
};

Related.propTypes = {
  intro: PropTypes.shape({
    cta: PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      target: PropTypes.string,
    }),
    subtitle: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  items: PropTypes.array.isRequired,
  variant: PropTypes.string,
};

Related.defaultProps = {
  items: [],
  variant: "posts",
};

const RelatedItem = ({
  category,
  description,
  image,
  slug,
  title,
  variant,
}) => (
  <div className="related-item">
    {image && slug && (
      <a href={`/${slug}`}>
        <div className="related-item__image">
          <img src={image} alt={title} />
        </div>
      </a>
    )}
    {category && category.href && category.label && (
      <h4 className="related-item__subtitle">
        <a href={category.href}>{category.label}</a>
      </h4>
    )}
    <h3 className="related-item__title">
      <a href={`/${slug}`}>{title}</a>
    </h3>
    <div className="related-item__description">{ParseHTML(description)}</div>
    <a href="#">View article</a>
  </div>
);

RelatedItem.propTypes = {
  category: PropTypes.object,
  description: PropTypes.string,
  image: PropTypes.shape({
    altText: PropTypes.string,
    mediaItemUrl: PropTypes.string.isRequired,
  }),
  productCategories: PropTypes.object,
  shortDescription: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Related;
