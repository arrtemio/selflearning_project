import React from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

const Counter = () => {
    const dispatch = useDispatch();
    const value = useSelector(getCounterValue);

    const { t } = useTranslation();

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div style={{
            display: 'flex', flexDirection: 'column', gap: '15px', justifyContent: 'center',
        }}
        >
            <h1 data-testid="counter-value">{value}</h1>
            <Button data-testid="increment-btn" onClick={increment}>{t('Increment')}</Button>
            <Button data-testid="decrement-btn" onClick={decrement}>{t('Decrement')}</Button>
        </div>
    );
};

export default Counter;
