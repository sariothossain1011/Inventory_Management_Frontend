import React, { Suspense ,lazy} from 'react'
import MasterLayout from '../../Components/MasterLayout/MasterLayout'
import LazyLoader from '../../Components/MasterLayout/LazyLoader'
const Profile =lazy(() => import('../../Components/Users/Profile'));
const ProfilePage = () => {
  return (
    <MasterLayout >
        <Suspense fallback={<LazyLoader/>}>
          <Profile/>
        </Suspense>
      </MasterLayout>
  )
}

export default ProfilePage