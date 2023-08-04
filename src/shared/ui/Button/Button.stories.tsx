import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from './Button';

const meta = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Text',
    },
};

Primary.decorators = [ThemeDecorator(Theme.LIGHT)];

export const PrimaryDark: Story = {
    args: {
        children: 'Text',
    },
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Clear: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR,
    },
};

Clear.decorators = [ThemeDecorator(Theme.LIGHT)];

export const ClearDark: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR,
    },
};

ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
    },
};

Outline.decorators = [ThemeDecorator(Theme.LIGHT)];

export const OutlineDark: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
    },
};

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
