import React, { Fragment, Suspense, lazy } from 'react'
import MasterLayout from '../../Components/MasterLayout/MasterLayout'
import LazyLoader from '../../Components/MasterLayout/LazyLoader'
const CustomerList = lazy(()=>import('../../Components/Customer/CustomerList'))
const BrandListPage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<LazyLoader/>}>
        <CustomerList/>
        </Suspense>
      </MasterLayout>
    </Fragment>
  )
}

export default BrandListPage