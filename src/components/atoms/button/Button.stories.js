import React from "react";
import { withKnobs, select, text } from "@storybook/addon-knobs";

import Button from "./Button";
import knobData from "./button.knobs.json";

const { icon } = knobData;

const buttonClicked = (e) => {
  e.preventDefault();
  alert("Hello");
};

export const basicButton = () => (
  <Button variant="primary">{text("Button text", "Basic button")}</Button>
);

export const secondaryButton = () => (
  <Button variant="secondary">Basic button</Button>
);

export const tertiaryButton = () => (
  <Button variant="tertiary">Basic button</Button>
);

export const iconButton = () => (
  <Button
    variant="tertiary"
    icon={select(icon.label, icon.options, icon.default, icon.group)}
  >
    {text("Button text", "Icon button")}
  </Button>
);

export const functionButton = () => (
  <Button onClick={buttonClicked}>Function button</Button>
);

export const linkedButton = () => <Button href="/route">Linked button</Button>;

export default {
  title: "Atom/Button",
  component: Button,
  decorators: [withKnobs],
};
