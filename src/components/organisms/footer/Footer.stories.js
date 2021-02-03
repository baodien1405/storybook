import React from "react";
import { withKnobs, array } from "@storybook/addon-knobs";

import Footer from "./Footer";
import knobData from "./footer.knobs.json";

const { menus } = knobData;

export const standardFooter = () => (
  <Footer menus={array(menus.label, menus.default, menus.group)} />
);

export default {
  title: "Organisms/Footer",
  component: Footer,
  decorators: [withKnobs],
};
