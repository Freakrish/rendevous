import React from 'react'
import './Home.css'
import ProfilePage from '../../components/profilePage/ProfileSide';
import PostSide from '../../components/PostSide/PostSide';
import RightSide from '../../components/RightSide/RightSide';
const Home = () => {
  return (
    <div className="Home">
        <ProfilePage/>
        <PostSide/>
        <RightSide/>
      
    </div>
  );
}

export default Home
