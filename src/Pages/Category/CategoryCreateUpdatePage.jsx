import React, {Fragment, Suspense} from 'react';
import MasterLayout from "../../Components/MasterLayout/MasterLayout";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
import CategoryCreateUpdate from "../../Components/Category/CategoryCreateUpdate";

const CategoryCreateUpdatePage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <CategoryCreateUpdate/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default CategoryCreateUpdatePage;