import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
    title: 'shared/Text',
    component: Text,
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: 'Jan Michael Vincent',
        text: 'Eruditi errem ubique dolores unum tation corrumpit.',
    },
};

export const Error: Story = {
    args: {
        title: 'Jan Michael Vincent',
        text: 'Eruditi errem ubique dolores unum tation corrumpit.',
        theme: TextTheme.ERROR,
    },
};

export const OnlyTitle: Story = {
    args: {
        title: 'Jan Michael Vincent',
    },
};

export const OnlyText: Story = {
    args: {
        text: 'Eruditi errem ubique dolores unum tation corrumpit.',
    },
};

export const PrimaryDark: Story = {
    args: {
        title: 'Jan Michael Vincent',
        text: 'Eruditi errem ubique dolores unum tation corrumpit.',
    },
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark: Story = {
    args: {
        title: 'Jan Michael Vincent',
    },
};

OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark: Story = {
    args: {
        text: 'Eruditi errem ubique dolores unum tation corrumpit.',
    },
};

OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
