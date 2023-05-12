import React, {Fragment, Suspense} from 'react';
import MasterLayout from "../../Components/MasterLayout/MasterLayout";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
import ProductCreateUpdate from "../../Components/Product/ProductCreateUpdate";

const ProductCreateUpdatePage = () => {




    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <ProductCreateUpdate/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default ProductCreateUpdatePage;