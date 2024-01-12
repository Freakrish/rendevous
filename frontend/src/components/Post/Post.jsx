import React from 'react'
import './Post.css'
import { PostData } from '../../Data/PostData'
import Post1 from '../Post1/Post1'


const Post = () => {
  return (
    <div className='Post'>
        {PostData.map((post, id)=>{
            return <Post1 data={post} id={id}/>
        })}
      
    </div>
  )
}

export default Post
