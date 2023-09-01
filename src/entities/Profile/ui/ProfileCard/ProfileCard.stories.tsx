import type { Meta, StoryObj } from '@storybook/react';

import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ProfileCard } from './ProfileCard';

import AvatarPic from '../../../../shared/assets/tests/story.jpg';

const meta = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    tags: ['autodocs'],
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        data: {
            age: 22,
            username: 'qwerty',
            name: 'Mike',
            currency: Currency.USD,
            country: Country.Poland,
            city: 'Lodz',
            avatar: AvatarPic,
        },
    },
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
};

export const WithError: Story = {
    args: { error: 'error' },
};
