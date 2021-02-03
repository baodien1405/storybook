import React from "react";
import { withKnobs, object, array, text } from "@storybook/addon-knobs";

import Homepage from "./Homepage";
import knobData from "./homepage.knobs.json";

const { header, banner, carousel, footer } = knobData;

export const homepageExample = () => (
  <Homepage
    header={object(header.label, header.default, header.group)}
    footer={object(footer.label, footer.default, footer.group)}
    banner={{
      content: text(
        banner.content.label,
        banner.content.default,
        banner.content.group
      ),
      cta: object(banner.cta.label, banner.cta.default, banner.cta.group),
      title: text(banner.title.label, banner.title.default, banner.title.group),
    }}
    carousel={{
      intro: {
        cta: object(
          carousel.intro.cta.label,
          carousel.intro.cta.default,
          carousel.intro.cta.group
        ),
        subtitle: text(
          carousel.intro.subtitle.label,
          carousel.intro.subtitle.default,
          carousel.intro.subtitle.group
        ),
        text: text(
          carousel.intro.text.label,
          carousel.intro.text.default,
          carousel.intro.text.group
        ),
        title: text(
          carousel.intro.title.label,
          carousel.intro.title.default,
          carousel.intro.title.group
        ),
      },
      items: array(
        carousel.items.label,
        carousel.items.default,
        carousel.items.group
      ),
    }}
  />
);

export default {
  title: "Page/Homepage",
  component: Homepage,
  decorators: [withKnobs],
};
