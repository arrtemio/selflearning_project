import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';

import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';

import { useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { useAppDispatch } from 'app/providers/StoreProvider';
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const [isOpen, setIsOpen] = useState(false);
    const authData = useSelector(getUserAuthData);

    const handleOpenLoginModal = () => {
        setIsOpen(true);
    };

    const handleCloseLoginModal = () => {
        setIsOpen(false);
    };

    const handleLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={classNames(cls.NavBar, {}, [className])}>
                <div className={cls.links}>
                    <Button
                        theme={ButtonTheme.CLEAR}
                        onClick={handleLogout}
                    >
                        {t('Выйти')}
                    </Button>
                </div>
            </div>
        );
    }

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
            {isOpen
                && <LoginModal isOpen={isOpen} onClose={handleCloseLoginModal} />}
        </>
    );
};
