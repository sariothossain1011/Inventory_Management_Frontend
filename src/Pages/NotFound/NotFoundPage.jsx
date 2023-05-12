import React, { Fragment, lazy } from 'react'
const NotFound = lazy(()=>import('../../Components/NotFound/NotFound'))
const NotFoundPage = () => {
  return (
    <Fragment>
      <NotFound/>
    </Fragment>
  )
}

export default NotFoundPage