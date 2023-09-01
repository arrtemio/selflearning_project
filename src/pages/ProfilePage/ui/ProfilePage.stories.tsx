import type { Meta, StoryObj } from '@storybook/react';

import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ProfilePage from './ProfilePage';

const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    tags: ['autodocs'],
    decorators: [StoreDecorator({
        profile: {
            form: {
                age: 22,
                username: 'qwerty',
                name: 'Mike',
                currency: Currency.USD,
                country: Country.Poland,
                city: 'Lodz',
            },
        },
    })],
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};

export const PrimaryDark: Story = {
    args: {},
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
