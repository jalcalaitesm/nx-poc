import type { Meta, StoryObj } from '@storybook/angular';
import { Button } from './button';

const meta: Meta<Button> = {
  title: 'Components/Button',
  component: Button,
};

export default meta;

type Story = StoryObj<Button>;

export const Primary: Story = {
  args: {},
};