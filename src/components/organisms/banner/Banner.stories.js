import React from "react";
import { withKnobs, select, object, text } from "@storybook/addon-knobs";

import Banner from "./Banner";

import knobData from "./banner.knobs.json";

const { content, cta, title, variant } = knobData;

export const standardBanner = () => (
  <Banner
    content={text(content.label, content.default, content.group)}
    cta={object(cta.label, cta.default, cta.group)}
    title={text(title.label, title.default, title.group)}
    variant={select(
      variant.label,
      variant.default,
      variant.options,
      variant.group
    )}
  />
);

export default {
  component: Banner,
  decorators: [withKnobs],
  title: "Organisms/Banner",
};
