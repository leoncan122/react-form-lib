import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Rating from "./Rating";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Rating",
  component: Rating,
} as Meta<typeof Rating>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Rating> = (args) => <Rating {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
const healthMinistryActiveOptions = [
    {
      id: 1,
      value: "Not at all active",
      text: "Not at all active",
      bgColor:'stronglyDisagreeBg',
        bgColorHover:'hover:stronglyDisagreeBg'
    },
    {
      id: 2,
      value: "Somewhat active",
      text: "Somewhat active",
      bgColor:'disagreeBg',
        bgColorHover:'hover:disagreeBg'
    },
    {
      id: 3,
      value: "neutral",
      text: "Neutral",
      bgColor:'neitherAgreeOrDisagreeBg',
        bgColorHover:'hover:neitherAgreeOrDisagreeBg'
    },
    {
      id: 4,
      value: "Active",
      text: "Active",
      bgColor:'agreeBg',
        bgColorHover:'hover:agreeBg'
    },
    {
      id: 5,
      value: "Extremely active",
      text: "Extremely active",
      bgColor:'stronglyAgreeBg',
        bgColorHover:'hover:stronglyAgreeBg'
    },
    
  ]

  
export const RateOptions = Template.bind({});
RateOptions.args = {
  name: "providerLevel",
  title: 'How is the level of your providers',
  surveyForm: 'state',
  onClick: (e: any) => alert('you choose: ' + e.target.value),
  options: healthMinistryActiveOptions
};

