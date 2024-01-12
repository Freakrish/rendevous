import React from 'react'
import Cover from '../../img/cover.jpg'
import Profile from '../../img/profileImg.jpg'
import './ProfileCard.css'
import ProfilePage from '../profilePage/ProfileSide'

const ProfileCard = () => {
  const ProfilePage = true;
  return (
    <div className='ProfileCard'>
        <div className="ProfileImage">
            <img src={Cover} alt=''/>
            <img src={Profile} alt=''/>
        </div>
        <div className="ProfileName">
            <span>Rishita</span>
            <span>Student , YMCA</span>
      </div>
      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>6056</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>56</span>
            <span>Followers</span>
          </div>

          {ProfilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>7</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {ProfilePage ? "" : <span>My Profile</span>}
    
    </div>
  );
}

export default ProfileCard
