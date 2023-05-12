import React, { Fragment, Suspense, lazy } from 'react'
import MasterLayout from '../../Components/MasterLayout/MasterLayout'
import LazyLoader from '../../Components/MasterLayout/LazyLoader'
const ExpenseTypeList = lazy(()=>import('../../Components/ExpenseType/ExpenseTypeList'))
const ExpenseTypeListPage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<LazyLoader/>}>
        <ExpenseTypeList/>
        </Suspense>
      </MasterLayout>
    </Fragment>
  )
}

export default ExpenseTypeListPage