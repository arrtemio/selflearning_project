import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';

import './styles/index.scss';
import { Modal } from 'shared/ui/Modal/Modal';
import { useState } from 'react';

const App = () => {
    const { theme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    return (
        <div className={classNames('app', {}, [theme])}>
            <NavBar />
            <div className="content-page">
                <SideBar />
                <AppRouter />
                <Modal isOpen={isOpen} onClose={handleCloseModal}>
                    <div>asdasd</div>
                </Modal>
                <button type="button" onClick={handleOpenModal}>MODAL</button>
            </div>
        </div>
    );
};

export default App;
