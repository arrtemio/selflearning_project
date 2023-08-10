import { DeepPartial } from 'redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
    test('should return 10', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounterValue(state as StateSchema)).toBe(10);
    });
});
