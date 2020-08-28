import React from 'react';
import { Redirect } from "react-router-dom";
import { QCMContext } from '../reducer/qcm';

const Login = () => {

    const [state, dispatch] = React.useContext(QCMContext);
    const { email, password, message, auth } = state;

    const handleSubmit = e => {
        e.preventDefault();

        dispatch({ type: "LOGIN" })
    }

    if (auth)
        return (
            <Redirect to={{ pathname: '/qcm' }} />
        )

    return (
        <form className="m-3" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input onChange={e => dispatch({ type: "EMAIL", email: e.target.value })} type="email" name="email" id="email" className="form-control" value={email} />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input onChange={e => dispatch({ type: "PASSWORD", password: e.target.value })} type="password" name="password" id="password" className="form-control" value={password} />
            </div>
            <input className="btn btn-outline-secondary" type="button" type="submit" />
            {message &&
                <div className="alert alert-danger m-3" role="alert">
                    {message}
                </div>
            }
        </form>
    )

}

export default Login;