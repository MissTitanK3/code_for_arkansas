import React, { useEffect, useState } from 'react'
import { fetchPosts, fetchUsers } from '../../api/Api'
import { NewsWrapper, PostWrapper } from '../../Styles';
import ProPic from '../../img/profilePhoto.png'

// API_BASE_URL, uploadPic 

export default function Newsfeed() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function getPosts() {
      setPosts(await fetchPosts())
    }
    getPosts()
  }, [])


  return (
    <PostWrapper>
      <div className="whitespace" />
      <h1>Latest News from Code For Little Rock</h1>
      <div>
        {posts.slice(0).reverse().map((post) => (
          <NewsWrapper key={post.id}>
            <div>
              <h3>{post.title}</h3>
              <h5>{post.publishedAt}</h5>
            </div>
            <div>
              <span>{post.body}</span>
            </div>
            <div className='postHead'>
              <div>
                <img src={ProPic} alt="" />
              </div>
              <div>
                <span>Author: {post.author}</span>
                <span>Role: {post.userRole}</span>
              </div>
            </div>
          </NewsWrapper>
        ))}

      </div>
    </PostWrapper>

  )
}
