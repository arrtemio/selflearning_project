import React, { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { DeepPartial } from 'redux';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateSchema>
}

const StoreProvider: FC<StoreProviderProps> = (props) => {
    const { children, initialState } = props;

    const store = createReduxStore(initialState as StateSchema);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
export default StoreProvider;
