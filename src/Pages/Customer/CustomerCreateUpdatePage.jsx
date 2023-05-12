import React, {Fragment, Suspense} from 'react';
import MasterLayout from "../../Components/MasterLayout/MasterLayout";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
import CustomerCreateUpdate from "../../Components/Customer/CustomerCreateUpdate";

const CustomerCreateUpdatePage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <CustomerCreateUpdate/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default CustomerCreateUpdatePage;