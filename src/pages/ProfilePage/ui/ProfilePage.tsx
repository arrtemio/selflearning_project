import React from 'react';
import { useTranslation } from 'react-i18next';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = () => {
    const { t } = useTranslation();
    return (
        <DynamicModuleLoader reducers={reducers}>
            <div>
                {t('Страница профиля')}
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
