import React, { lazy,Fragment, Suspense } from 'react'
import LazyLoader from '../../Components/MasterLayout/LazyLoader'
const SendOTP = lazy(()=>import('../../Components/Users/SendOTP')); 

const SendOTPPage = () => {
  return (
    <Fragment>
      <Suspense fallback = {<LazyLoader/>}>
        <SendOTP/>
      </Suspense>
    </Fragment>
  )
}

export default SendOTPPage