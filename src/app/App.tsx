import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";

import './styles/index.scss';

import { AppRouter } from "app/providers/router";
import { NavBar } from "widgets/NavBar";
import { SideBar } from "widgets/SideBar";
import { Suspense } from "react";

const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<div>Loading...</div>}>
                <NavBar />
                <div className='content-page'>
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;