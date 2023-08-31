import { useTranslation } from 'react-i18next';

import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { SideBarItemType } from '../../model/items';
import cls from './SideBarItem.module.scss';

interface SideBarItemProps {
    item: SideBarItemType
    collapsed: boolean
    authOnly?: boolean
}

export const SideBarItem = memo(({ item, collapsed, authOnly }: SideBarItemProps) => {
    const { t } = useTranslation();

    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={cls.link}
        >
            <item.Icon className={cls.icon} />
            {!collapsed && (
                <span>{t(item.text)}</span>
            )}
        </AppLink>
    );
});
