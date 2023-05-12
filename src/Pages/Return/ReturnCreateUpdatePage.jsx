import React, {Fragment, Suspense} from 'react';
import MasterLayout from "../../Components/MasterLayout/MasterLayout";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
import ReturnCreateUpdate from "../../Components/Return/ReturnCreateUpdate";

const ReturnCreateUpdatePage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <ReturnCreateUpdate/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default ReturnCreateUpdatePage;