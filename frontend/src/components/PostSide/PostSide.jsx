import React from 'react'
import './PostSide.css'
import PostShare from '../PostShare/PostShare'
import Post from '../Post/Post'
const PostSide = () => {
  return (
    <div className='PostSide'>
      <PostShare/>
      <Post/>
    </div>
  )
}

export default PostSide
