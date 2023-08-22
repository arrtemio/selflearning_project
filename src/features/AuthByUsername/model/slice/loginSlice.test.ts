import { DeepPartial } from 'redux';
import { loginActions, loginReducer } from './loginSlice';
import { LoginSchema } from '../types/loginSchema';

describe('loginSlice', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: '123' };
        expect(loginReducer(state as LoginSchema, loginActions.setUsername('arrtemio666')))
            .toEqual({ username: 'arrtemio666' });
    });
    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '123' };
        expect(loginReducer(state as LoginSchema, loginActions.setPassword('123123')))
            .toEqual({ password: '123123' });
    });
});
