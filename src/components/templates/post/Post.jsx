import React from "react";

import StyledPost from "./Post.styles";

import Header from "../../organisms/header/Header";
import Banner from "../../organisms/banner/Banner";
import Related from "../../organisms/related/Related";
import Footer from "../../organisms/footer/Footer";

const PostTemplate = ({ header, footer, banner, related }) => (
  <StyledPost>
    <Header {...header} />
    <Banner {...banner} />
    <Related {...related} />
    <Footer {...footer} />
  </StyledPost>
);

export default PostTemplate;
