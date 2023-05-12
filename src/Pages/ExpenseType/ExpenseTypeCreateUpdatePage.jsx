import React, {Fragment, Suspense} from 'react';
import MasterLayout from "../../Components/MasterLayout/MasterLayout";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
import ExpenseTypeCreateUpdate from "../../Components/ExpenseType/ExpenseTypeCreateUpdate";

const ExpenseTypeCreateUpdatePage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <ExpenseTypeCreateUpdate/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default ExpenseTypeCreateUpdatePage;