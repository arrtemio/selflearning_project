import { useTranslation } from 'react-i18next';

const HomePage = () => {
    const { t } = useTranslation('home');

    return (
        <div>
            {t('Главная станица')}
        </div>
    );
};

export default HomePage;
