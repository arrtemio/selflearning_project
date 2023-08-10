import { createSelector } from 'reselect';
import { getCounter } from 'entities/Counter/model/selectors/getCounter/getCounter';

export const getCounterValue = createSelector(
    getCounter,
    (counter) => counter.value,
);
