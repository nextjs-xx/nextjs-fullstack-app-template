import { ComponentMeta, ComponentStory } from '@storybook/react';
import ButtonTemplate, { IButtonTemplate } from './ButtonTemplate';
import { mockButtonTemplateProps } from './ButtonTemplate.mocks';

export default {
  title: 'templates/ButtonTemplate',
  component: ButtonTemplate,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ButtonTemplate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonTemplate> = (args) => (
  <ButtonTemplate {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockButtonTemplateProps.base,
} as IButtonTemplate;
