import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { NavBar } from './NavBar';

const meta = {
    title: 'widget/NavBar',
    component: NavBar,
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
