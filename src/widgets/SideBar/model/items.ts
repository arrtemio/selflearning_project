import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';

export interface SideBarItemType {
    path: string;
    text: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>
}

export const SideBarItemsList: SideBarItemType[] = [
    {
        path: RoutePath.home,
        text: 'Home',
        Icon: HomeIcon,
    },
    {
        path: RoutePath.about,
        text: 'About',
        Icon: AboutIcon,
    },
    {
        path: RoutePath.profile,
        text: 'Profile',
        Icon: ProfileIcon,
    },

];
