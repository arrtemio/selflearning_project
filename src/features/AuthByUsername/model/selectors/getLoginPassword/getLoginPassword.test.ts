import { DeepPartial } from 'redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
    test('should return 123', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: '123',
                username: '123',
                isLoading: false,
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('123');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
