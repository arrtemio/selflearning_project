import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';

const meta = {
    title: 'shared/Select',
    component: Select,
    tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        label: 'user',
        options: [
            { value: 'arrtemio', content: 'arrtemio' },
            { value: 'artem', content: 'artem' },
        ],
    },
};
