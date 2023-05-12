import React, {lazy, Fragment, Suspense } from 'react'
import LazyLoader from '../../Components/MasterLayout/LazyLoader'
const CreatePassword = lazy(()=>import('../../Components/Users/CreatePassword')); 
const CreatePasswordPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<LazyLoader/>}>
        <CreatePassword/>
      </Suspense>
    </Fragment>
  )
}

export default CreatePasswordPage