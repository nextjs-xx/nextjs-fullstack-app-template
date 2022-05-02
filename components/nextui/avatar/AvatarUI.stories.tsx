import { ComponentMeta, ComponentStory } from '@storybook/react';
import AvatarUI, { IAvatar } from './AvatarUI';
import { mockAvatarProps } from './AvatarUI.mocks';

export default {
  title: 'NextUI/AvatarUI',
  component: AvatarUI,
  argTypes: {},
} as ComponentMeta<typeof AvatarUI>;

const Template: ComponentStory<typeof AvatarUI> = (args) => (
  <AvatarUI {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockAvatarProps.base,
} as IAvatar;
