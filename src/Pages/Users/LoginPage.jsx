import React, {Fragment, lazy, Suspense} from 'react';
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
const Login =lazy(() => import('../../Components/Users/Login'));
const LoginPage = () => {
    return (
        <Fragment>
            <Suspense fallback={<LazyLoader/>}>
                <Login/>
            </Suspense>
        </Fragment>
    );
};


export default LoginPage;