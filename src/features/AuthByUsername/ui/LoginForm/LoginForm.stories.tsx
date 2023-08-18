import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({
        loginForm: { username: 'arrtemio', password: '123' },
    })],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};

export const WithError: Story = {
    args: {},
};

WithError.decorators = [StoreDecorator({
    loginForm: { username: 'arrtemio', password: '123', error: 'Error' },
})];

export const WithLoading: Story = {

};

WithLoading.decorators = [StoreDecorator({
    loginForm: { username: 'arrtemio', password: '123', isLoading: true },
})];

export const PrimaryDark: Story = {
    args: {},
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
