import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Meta, StoryObj } from '@storybook/react';
import HomePage from './HomePage';

const meta = {
    title: 'pages/HomePage',
    component: HomePage,
    tags: ['autodocs'],
} satisfies Meta<typeof HomePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {};
Secondary.decorators = [ThemeDecorator(Theme.DARK)];
