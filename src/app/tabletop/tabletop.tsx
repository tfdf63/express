'use client';

import { useState, useEffect } from 'react';

interface Post {
  id: number;
  last_name: string;
  second_name: string;
  points: number;
}

const TablePost: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  //   useEffect(() => {
  //     fetch('http://localhost:5000/alluser')
  //       .then((response) => response.json())
  //       .then((data) => setPosts(data));
  //   }, []);

  useEffect(() => {
    const samplePosts: Post[] = [
      {
        id: 1,
        last_name: 'Дорогойченков',
        second_name: 'Иванов21123123',
        points: 12,
      },
      {
        id: 3,
        last_name: 'Дорогойченков',
        second_name: 'Петров',
        points: 7,
      },
      {
        id: 4,
        last_name: 'Дорогойченков',
        second_name: 'Егор',
        points: 5,
      },
      {
        id: 2,
        last_name: 'Алексей',
        second_name: 'Дорогойченков',
        points: 2,
      },
      {
        id: 6,
        last_name: 'Алексей',
        second_name: 'Дорогойченков',
        points: 2,
      },
      {
        id: 7,
        last_name: 'Алексей',
        second_name: 'Дорогойченков',
        points: 2,
      },
      {
        id: 8,
        last_name: 'Алексей',
        second_name: 'Дорогойченков',
        points: 2,
      },
      {
        id: 9,
        last_name: 'Алексей',
        second_name: 'Дорогойченков',
        points: 2,
      },
      {
        id: 10,
        last_name: 'Алексей',
        second_name: 'Дорогойченков',
        points: 2,
      },
      {
        id: 11,
        last_name: 'Алексей',
        second_name: 'Дорогойченков',
        points: 2,
      },
    ];
    setPosts(samplePosts);
  }, []);

  return (
    <div>
      <h1 className={`mb-3 mt-12 text-xl font-semibold flex justify-center shadow-xl`}>Список участников</h1>
      {posts.map((post) => (
        <div
          key={post.id}
          className={`grid grid-rows-1 grid-flow-col gap-12 py-1 text-align: left justify-center`}
        >
          <div className='w-36 flex '>{post.last_name}</div>
          <div className='w-24 flex '>{post.second_name}</div>
          <div className='w-4 flex  justify-center '>
            {post.points}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TablePost;
