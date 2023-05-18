import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import SearchBar from "./SearchBar";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/SearchBar",
  component: SearchBar,
} as Meta<typeof SearchBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof SearchBar> = (args) => <SearchBar {...args} />;


export const SearchWithFunction = Template.bind({});
SearchWithFunction.args = {
  searchFunction: () => {},
};