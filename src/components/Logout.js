import React, {useEffect, useContext} from 'react';
import { Redirect } from "react-router-dom";
import { QCMContext } from '../reducer/qcm';

const Logout = () => {

    const [state, dispatch] = useContext(QCMContext);

    useEffect(() => {
        dispatch({ type: "LOGOUT" })

    }, []);

    return (
        <Redirect to={{ pathname: "/" }} />
    )

}

export default Logout;