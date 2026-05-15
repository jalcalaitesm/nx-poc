import type { Meta, StoryObj } from '@storybook/react';
import { Ui } from './ui';

const meta: Meta<typeof Ui> = {
  component: Ui,
  title: 'Components/Button',
};

export default meta;

type Story = StoryObj<typeof Ui>;

export const Primary: Story = {
  args: {
    label: 'Hello Nx',
  },
};