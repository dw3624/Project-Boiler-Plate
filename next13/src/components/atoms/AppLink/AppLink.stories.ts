import { Meta, StoryObj } from '@storybook/react';
import AppLink from './AppLink';

const meta: Meta<typeof AppLink> = {
  title: 'Components/Atoms/AppLink',
  component: AppLink,
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  args: {
    type: 'primary',
    children: 'Button',
  },
};
