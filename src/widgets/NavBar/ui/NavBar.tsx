import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.NavBar, {}, [className])}>
            <div className={cls.links}>
                {t('')}
            </div>
        </div>
    );
};
