import React from 'react'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../profileCard/ProfileCard'
import './ProfileSide.css'
import FollowerCard from '../FollowerCard/FollowerCard'


const ProfileSide = () => {
  return (
    <div className="ProfilePage">
      <LogoSearch/>
      <ProfileCard/>
      <FollowerCard/>
    </div>
  )
}

export default ProfileSide
