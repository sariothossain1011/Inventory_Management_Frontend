import React, {Fragment, Suspense} from 'react';
import MasterLayout from "../../Components/MasterLayout/MasterLayout";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
import PurchaseCreateUpdate from "../../Components/Purchase/PurchaseCreateUpdate";

const PurchaseCreateUpdatePage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <PurchaseCreateUpdate/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default PurchaseCreateUpdatePage;