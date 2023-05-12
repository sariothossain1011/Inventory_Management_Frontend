import React, { Fragment, Suspense, lazy } from 'react'
import MasterLayout from '../../Components/MasterLayout/MasterLayout'
import LazyLoader from '../../Components/MasterLayout/LazyLoader'
const SaleList = lazy(()=>import('../../Components/Sales/SalesList'))
const SalesListPage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<LazyLoader/>}>
        <SaleList />
        </Suspense>
      </MasterLayout>
    </Fragment>
  )
}

export default SalesListPage