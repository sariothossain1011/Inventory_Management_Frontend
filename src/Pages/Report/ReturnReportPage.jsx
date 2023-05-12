import React, {Fragment, Suspense} from 'react';
import MasterLayout from "../../Components/MasterLayout/MasterLayout";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
import ReturnReport from "../../Components/Report/ReturnReport";

const ReturnReportPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <ReturnReport/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default ReturnReportPage;