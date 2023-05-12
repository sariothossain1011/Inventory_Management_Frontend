import React, {Fragment, Suspense} from 'react';
import MasterLayout from "../../Components/MasterLayout/MasterLayout";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
import BrandCreateUpdate from "../../Components/Brand/BrandCreateUpdate";

const BrandCreateUpdatePage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <BrandCreateUpdate/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default BrandCreateUpdatePage;