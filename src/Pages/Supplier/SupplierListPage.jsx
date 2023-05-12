import React, { Fragment, Suspense, lazy } from 'react'
import MasterLayout from '../../Components/MasterLayout/MasterLayout'
import LazyLoader from '../../Components/MasterLayout/LazyLoader'
const SupplierList = lazy(()=>import('../../Components/Supplier/SupplierList'))
const SupplierListPage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<LazyLoader/>}>
        <SupplierList/>
        </Suspense>
      </MasterLayout>
    </Fragment>
  )
}

export default SupplierListPage