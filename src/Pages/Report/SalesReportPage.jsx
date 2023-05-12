import React, {Fragment, Suspense} from 'react';
import MasterLayout from "../../Components/MasterLayout/MasterLayout";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
import SaleReport from '../../Components/Report/SalesReport';


const SalesReportPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <SaleReport/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default SalesReportPage;