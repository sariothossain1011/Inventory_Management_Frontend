import React, { Fragment, Suspense, lazy } from "react";
import MasterLayout from "../../Components/MasterLayout/MasterLayout";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
const CategoryList = lazy(() =>
  import("../../Components/Category/CategoryList")
);
const CategoryListPage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <CategoryList />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default CategoryListPage;
