import { useTranslation } from 'react-i18next';

import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { memo } from 'react';
import { SideBarItemType } from '../../model/items';
import cls from './SideBarItem.module.scss';

interface SideBarItemProps {
    item: SideBarItemType
    collapsed: boolean
}

export const SideBarItem = memo(({ item, collapsed }: SideBarItemProps) => {
    const { t } = useTranslation();

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
