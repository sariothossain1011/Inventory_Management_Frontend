import React, { Fragment, Suspense, lazy } from 'react'
import MasterLayout from '../../Components/MasterLayout/MasterLayout'
import LazyLoader from '../../Components/MasterLayout/LazyLoader'
const BrandList = lazy(()=>import('../../Components/Brand/BrandList'))
const BrandListPage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<LazyLoader/>}>
        <BrandList/>
        </Suspense>
      </MasterLayout>
    </Fragment>
  )
}

export default BrandListPage