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
      <h2>Latest News from Code For Little Rock</h2>
      <div>
        {posts.map((post) => (
          <NewsWrapper key={post.id}>
            <span>Title: {post.title}</span>
            <span>Date: {post.publishedAt}</span>
            <span>Body: {post.body}</span>
          </NewsWrapper>
        ))}

      </div>
    </PostWrapper>

  )
}
