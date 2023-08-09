import { fireEvent, screen } from '@testing-library/react';
import { SideBar } from 'widgets/SideBar';
import {
    componentRender,
} from 'shared/lib/tests/componentRender/componentRender';

describe('SideBar tests', () => {
    test('first test', () => {
        componentRender(<SideBar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('toggle sidebar', () => {
        componentRender(<SideBar />);

        const sideBar = screen.getByTestId('sidebar');
        const toggleBtn = screen.getByTestId('sidebar-toggle-btn');

        expect(sideBar).toBeInTheDocument();
        expect(sideBar).toHaveClass('collapsed');
        fireEvent.click(toggleBtn);
        expect(sideBar).not.toHaveClass('collapsed');
    });
});
