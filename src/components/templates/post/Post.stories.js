import React from "react";
import { withKnobs, object, select } from "@storybook/addon-knobs";

import PostTemplate from "./Post";
import knobData from "./post.knobs.json";

const { header, banner, related, footer } = knobData;

export const examplePost = () => (
  <PostTemplate
    header={object(header.label, header.default, header.group)}
    banner={object(banner.label, banner.default, banner.group)}
    related={object(related.label, related.default, related.group)}
    footer={object(footer.label, footer.default, footer.group)}
  />
);

export default {
  title: "Templates/Blog Post",
  component: PostTemplate,
  decorators: [withKnobs],
};
