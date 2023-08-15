import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';

import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {
    const { t } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);

    const handleOpenLoginModal = () => {
        setIsOpen(true);
    };

    const handleCloseLoginModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            <div className={classNames(cls.NavBar, {}, [className])}>
                <div className={cls.links}>
                    <Button
                        theme={ButtonTheme.CLEAR}
                        onClick={handleOpenLoginModal}
                    >
                        {t('Войти')}
                    </Button>
                </div>

            </div>
            <LoginModal isOpen={isOpen} onClose={handleCloseLoginModal} />
        </>
    );
};
