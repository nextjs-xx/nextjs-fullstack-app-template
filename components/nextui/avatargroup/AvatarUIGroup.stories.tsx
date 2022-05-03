import { ComponentMeta, ComponentStory } from '@storybook/react';
import AvatarUIGroup, { IAvatarGroup } from './AvatarUIGroup';
import { mockAvatarGroupProps } from './AvatarUIGroup.mocks';

export default {
  title: 'NextUI/AvatarUI',
  component: AvatarUIGroup,
  argTypes: {},
} as ComponentMeta<typeof AvatarUIGroup>;

const Template: ComponentStory<typeof AvatarUIGroup> = (args) => (
  <AvatarUIGroup {...args} />
);

export const BaseGroup = Template.bind({});

BaseGroup.args = {
  ...mockAvatarGroupProps.baseGroup,
} as IAvatarGroup;
