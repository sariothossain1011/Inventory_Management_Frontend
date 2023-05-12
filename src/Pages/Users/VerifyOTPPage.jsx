import React, { Fragment, Suspense, lazy } from 'react'
import LazyLoader from '../../Components/MasterLayout/LazyLoader'
const VerifyOTP = lazy(()=>import('../../Components/Users/VerifyOTP'))
const VerifyOTPPage = () => {
  return (
    <Fragment>
      <Suspense fallback = {<LazyLoader/>}>
        <VerifyOTP/>
      </Suspense>
    </Fragment>
  )
}

export default VerifyOTPPage