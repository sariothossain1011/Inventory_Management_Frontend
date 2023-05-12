import React, {Fragment, Suspense} from 'react';
import MasterLayout from "../../Components/MasterLayout/MasterLayout";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
import SupplierCreateUpdate from "../../Components/Supplier/SupplierCreateUpdate";

const SupplierCreateUpdatePage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <SupplierCreateUpdate/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default SupplierCreateUpdatePage;