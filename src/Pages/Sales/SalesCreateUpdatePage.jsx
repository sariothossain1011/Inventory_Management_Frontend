import React, {Fragment, Suspense} from 'react';
import MasterLayout from "../../Components/MasterLayout/MasterLayout";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
import SalesCreateUpdate from "../../Components/Sales/SalesCreateUpdate";

const SalesCreateUpdatePage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <SalesCreateUpdate/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default SalesCreateUpdatePage;