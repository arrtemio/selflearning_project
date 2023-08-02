import { fireEvent, screen } from '@testing-library/react';
import { SideBar } from 'widgets/SideBar';
import {
    renderWithTranslation,
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('SideBar tests', () => {
    test('first test', () => {
        renderWithTranslation(<SideBar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('toggle sidebar', () => {
        renderWithTranslation(<SideBar />);

        const sideBar = screen.getByTestId('sidebar');
        const toggleBtn = screen.getByTestId('sidebar-toggle-btn');

        expect(sideBar).toBeInTheDocument();
        expect(sideBar).toHaveClass('collapsed');
        fireEvent.click(toggleBtn);
        expect(sideBar).not.toHaveClass('collapsed');
    });
});
