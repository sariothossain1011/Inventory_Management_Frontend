import React, {Fragment, Suspense} from 'react';
import MasterLayout from "../../Components/MasterLayout/MasterLayout";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
import ExpenseReport from "../../Components/Report/ExpenseReport";

const ExpenseReportPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                        <ExpenseReport/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default ExpenseReportPage;