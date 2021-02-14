import React, { useEffect, useState } from 'react'
import { fetchPosts, API_BASE_URL, uploadPic } from '../../api/Api'
import { NewsWrapper, PostWrapper } from '../../Styles';

export default function Newsfeed() {
  const [posts, setPosts] = useState([])
  // const [fetchStatusError, setFetchStatusError] = useState(null);

  useEffect(() => {
    async function getPosts() {
      setPosts(await fetchPosts())
    }
    getPosts()
  }, [])
  console.log(posts)

  // const refetchPhotos = async () => {
  //   try {
  //     setFetchStatusError(null);
  //     setPosts(await fetchPosts());
  //   } catch {
  //     setFetchStatusError("Unable to fetch posts.");
  //   }
  // };


  return (
    <PostWrapper>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>Latest News from Code For Little Rock</h1>
      <div>
        {posts.map((post) => (
          <NewsWrapper key={post.id}>
            <div>
              <h3>{post.title}</h3>
            </div>
            <h5>Date: {post.publishedAt}</h5>
            <div>
              <span>{post.body}</span>
              <span>Author: {post.author}</span>
            </div>
          </NewsWrapper>
        ))}

      </div>
    </PostWrapper>

  )
}
