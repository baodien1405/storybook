import React from "react";
import { withKnobs, array, object, text } from "@storybook/addon-knobs";
import Carousel from "./Carousel";

import knobData from "./carousel.knobs.json";
const { items, intro } = knobData;

export const productCarousel = () => (
  <Carousel
    intro={{
      cta: object(intro.cta.label, intro.cta.default, intro.cta.group),
      subtitle: text(
        intro.subtitle.label,
        intro.subtitle.default,
        intro.subtitle.group
      ),
      text: text(intro.text.label, intro.text.default, intro.text.group),
      title: text(intro.title.label, intro.title.default, intro.title.group),
    }}
    items={array(items.label, items.default, items.group)}
  />
);

export default {
  component: Carousel,
  decorators: [withKnobs],
  title: "Organisms/Carousel",
};
