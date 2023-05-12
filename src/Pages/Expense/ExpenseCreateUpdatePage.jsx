import React, {Fragment, Suspense} from 'react';
import MasterLayout from "../../Components/MasterLayout/MasterLayout";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
import ExpenseCreateUpdate from "../../Components/Expense/ExpenseCreateUpdate";

const ExpenseCreateUpdatePage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <ExpenseCreateUpdate/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default ExpenseCreateUpdatePage;