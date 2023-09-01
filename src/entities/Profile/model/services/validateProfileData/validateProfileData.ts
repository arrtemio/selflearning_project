import { Profile, ValidateProfileError } from '../../types/profileSchema';

export const validateProfileData = (profile?: Profile) => {
    const errors: ValidateProfileError[] = [];
    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }

    const { name, username, age } = profile;

    if (!name || !username) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORRECT_USER_AGE);
    }

    return errors;
};
