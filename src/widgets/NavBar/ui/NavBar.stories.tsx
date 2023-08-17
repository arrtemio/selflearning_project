import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { NavBar } from './NavBar';

const meta = {
    title: 'widget/NavBar',
    component: NavBar,
    tags: ['autodocs'],
    decorators: [StoreDecorator({ user: undefined })],
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const WithAuthorization: Story = {};

WithAuthorization.decorators = [StoreDecorator({ user: { authData: {} } })];

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
