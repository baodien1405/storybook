import React from "react";

import Header from "../../organisms/header/Header";
import Carousel from "../../organisms/carousel/Carousel";
import Banner from "../../organisms/banner/Banner";
import Footer from "../../organisms/footer/Footer";

const Homepage = ({ header, footer, banner, carousel }) => (
  <>
    <Header {...header} />
    <Banner {...banner} />
    <Carousel {...carousel} />
    <Footer {...footer} />
  </>
);

export default Homepage;
