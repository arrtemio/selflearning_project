import { FC, ReactNode, useEffect } from 'react';
import { useStore } from 'react-redux';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from 'redux';

export type ReducersList = {
    [reducerKey in StateSchemaKey]?: Reducer;
}

type ReducerListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
    children: ReactNode;
    reducers: ReducersList;
}

const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const {
        children, reducers,
    } = props;
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(([reducerName, reducer]: ReducerListEntry) => {
            store.reducerManager.add(reducerName, reducer);
        });

        return () => {
            Object.entries(reducers).forEach(([reducerName]: ReducerListEntry) => {
                store.reducerManager.remove(reducerName);
            });
        };
        // eslint-disable-next-line
    }, []);
    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {children}
        </>
    );
};

export default DynamicModuleLoader;
