import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { useLocation, Navigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export function RequireAuth({ children }: {children: ReactNode}) {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();

    if (!auth) {
        return <Navigate to={RoutePath.home} state={{ from: location }} replace />;
    }

    return children;
}
