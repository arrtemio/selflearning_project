import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { Profile } from 'entities/Profile';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
    const form: Profile = {
        name: 'Mike',
        username: 'qwerty',
        age: 22,
        city: 'Lodz',
        country: Country.Poland,
        currency: Currency.USD,
    };
    test('should return form', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                form,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(form);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
