import React, {useReducer} from 'react';
import {QCMContext, initialState, reducer} from './reducer/qcm';

const Provider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <QCMContext.Provider value={[state, dispatch]}>
            {children}
        </QCMContext.Provider>
    )
}

export default Provider;