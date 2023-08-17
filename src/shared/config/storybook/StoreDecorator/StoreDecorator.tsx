import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from 'redux';

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (Story: Story) => (
    <StoreProvider initialState={state}>
        <Story />
    </StoreProvider>
);
