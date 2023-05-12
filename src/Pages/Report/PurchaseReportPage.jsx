import React, {Fragment, Suspense} from 'react';
import MasterLayout from "../../Components/MasterLayout/MasterLayout";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
import PurchaseReport from "../../Components/Report/PurchaseReport";

const PurchaseReportPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <PurchaseReport/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default PurchaseReportPage;