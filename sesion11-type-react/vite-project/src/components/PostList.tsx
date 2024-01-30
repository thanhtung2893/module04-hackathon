import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from '../confige/Post';

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        setPosts(res.data);
      })
      .catch(error => {
        console.error('ket noi khong thanh cong:', error);
      });
  }, []);

  return (
    <div>
      <h2>Post List</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h4>tiêu đề: {post.title}</h4>            
            <strong>Stt: {post.id}</strong><br />
            <strong>mã User: {post.userId}</strong>
            <p><strong>nội dung:</strong> {post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
