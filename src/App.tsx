import { Link, Route, Routes } from 'react-router-dom';
import { Suspense } from "react";

import { LazyHomePage } from "./pages/HomePage/LazyHomePage";
import { LazyAboutPage } from "./pages/AboutPage/LazyAboutPage";

import './styles/index.scss';
import { useTheme } from "./Theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <button onClick={toggleTheme}>theme</button>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<LazyHomePage />} />
                    <Route path='/about' element={<LazyAboutPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;