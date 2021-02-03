import React from "react";
import { withKnobs, array, object, text } from "@storybook/addon-knobs";

import Related from "./Related";

import knobData from "./related.knobs.json";

const { items, intro } = knobData;

export const postRelated = () => (
  <Related
    intro={{
      cta: object(intro.cta.label, intro.cta.default, intro.cta.group),
      subtitle: text(
        intro.subtitle.label,
        intro.subtitle.default,
        intro.subtitle.group
      ),
      text: text(intro.text.label, intro.text.default, intro.text.group),
      title: text(intro.text.label, intro.text.default, intro.text.group),
    }}
    items={array(items.label, items.default, items.group)}
  />
);

export default {
  component: Related,
  decorators: [withKnobs],
  title: "Organisms/Related",
};
