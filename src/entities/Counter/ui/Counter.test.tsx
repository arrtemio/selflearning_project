import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { fireEvent, screen } from '@testing-library/react';
import Counter from './Counter';

describe('Counter render test', () => {
    test('render test', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('counter-value')).toBeInTheDocument();
        expect(screen.getByTestId('counter-value')).toHaveTextContent('10');
        expect(screen.getByTestId('increment-btn')).toBeInTheDocument();
        expect(screen.getByTestId('decrement-btn')).toBeInTheDocument();
    });
    test('increment/decrement test', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        const incrementBtn = screen.getByTestId('increment-btn');
        const decrementBtn = screen.getByTestId('decrement-btn');
        const value = screen.getByTestId('counter-value');

        fireEvent.click(incrementBtn);
        expect(value).toHaveTextContent('11');
        fireEvent.click(decrementBtn);
        expect(value).toHaveTextContent('10');
    });
});
