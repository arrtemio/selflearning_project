import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { Profile } from 'entities/Profile';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
    const data: Profile = {
        name: 'Mike',
        username: 'qwerty',
        age: 22,
        city: 'Lodz',
        country: Country.Poland,
        currency: Currency.USD,
    };
    test('should return data', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
