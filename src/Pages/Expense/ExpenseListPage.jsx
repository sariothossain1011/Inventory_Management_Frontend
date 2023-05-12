import React, { Fragment, Suspense, lazy } from 'react'
import MasterLayout from '../../Components/MasterLayout/MasterLayout'
import LazyLoader from '../../Components/MasterLayout/LazyLoader'
const ExpenseList = lazy(()=>import('../../Components/Expense/ExpenseList'))
const BrandListPage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<LazyLoader/>}>
        <ExpenseList/>
        </Suspense>
      </MasterLayout>
    </Fragment>
  )
}

export default BrandListPage