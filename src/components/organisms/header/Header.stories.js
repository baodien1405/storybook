import React from "react";
import { withKnobs, array } from "@storybook/addon-knobs";

import Header from "./Header";

import knobData from "./header.knobs.json";

const { navigation } = knobData;

export const standardHeader = () => (
  <Header
    navigation={array(navigation.label, navigation.default, navigation.group)}
  />
);

export default {
  component: Header,
  decorators: [withKnobs],
  title: "Organisms/Header",
};
