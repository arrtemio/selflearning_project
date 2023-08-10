import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';

const HomePage = () => {
    const { t } = useTranslation('home');

    return (
        <div>
            {t('Главная станица')}
            <Counter />
        </div>
    );
};

export default HomePage;
