import React, { Fragment, Suspense, lazy } from 'react'
import MasterLayout from '../../Components/MasterLayout/MasterLayout'
import LazyLoader from '../../Components/MasterLayout/LazyLoader'
const ReturnList = lazy(()=>import('../../Components/Return/ReturnList'))
const ReturnListPage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<LazyLoader/>}>
        <ReturnList />
        </Suspense>
      </MasterLayout>
    </Fragment>
  )
}

export default ReturnListPage