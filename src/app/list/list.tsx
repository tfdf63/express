'use client';

import { useState, useEffect } from 'react';

interface Post {
  id: number;
  title: string;
  content: string;
}

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  // useEffect(() => {
  //   fetch('http://localhost:5000/alluser')
  //     .then((response) => response.json())
  //     .then((data) => setPosts(data));
  // }, []);

  useEffect(() => {
    const samplePosts: Post[] = [
      {
        id: 7,
        title: 'Новый заголовок, который с очень большим текстом ',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
      {
        id: 6,
        title: 'Новый заголовок 2',
        content: 'Основной текст нового заголовка 2',
      },
      {
        id: 5,
        title: 'Новый заголовок',
        content: 'Основной текст нового заголовка',
      },
      {
        id: 4,
        title: 'Заголовок 3',
        content: 'Здесь будет написан основной текст поста',
      },
      {
        id: 3,
        title: 'Заголовок 2',
        content: 'null',
      },
      {
        id: 1,
        title: 'test',
        content: 'test contetn',
      },
    ];
    setPosts(samplePosts);
  }, []);

  return (
    <div>
      <h1 className={`mt-12 mb-3 text-xl font-semibold`}>Список постов</h1>
      {posts.map((post) => (
        <div
          key={post.id}
          className='grid grid-rows-1 grid-flow-col auto-cols-min gap-4 py-2 text-sm  text-center items-center  shadow-sm mb-2'
        >
          <div className='w-8'>{post.id}</div>
          <div className='w-32 text-left '>{post.title}</div>
          <div className='w-40 text-justify bg-red-200'>{post.content}</div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
