'use client';

import { useState, useEffect } from 'react';

interface Pts {
  ptsid: number;
  tteamid: number;
  nname: string;
  wincount: number;
  tiecount: number;
  losecount: number;
  pts: number;
  rank: number;
}

const TablePts: React.FC = () => {
  const [ptss, setPtss] = useState<Pts[]>([]);

  //   useEffect(() => {
  //     fetch('http://localhost:5000/alluser')
  //       .then((response) => response.json())
  //       .then((data) => setPosts(data));
  //   }, []);

  useEffect(() => {
    fetch('http://localhost:5000/alluser')
      .then((response) => response.json())
      .then((data) => setPtss(data));
  }, []);

  return (
    <div>
      <h1 className={`mt-12 mb-3 text-xl font-semibold flex justify-center`}>Турнирная таблица</h1>
        <div className='max-w-full grid grid-rows-1 grid-flow-col gap-4 py-2 justify-center text-center font-semibold'>
        <div className='w-4'>#</div>
          <div className='w-36 text-left'>Команда</div>
          <div className='w-8'>Поб</div>
          <div className='w-8'>Нич</div>
          <div className='w-8'>Пор</div>
          <div className='w-12'>Очк</div>
        </div>
        {ptss.map((pts) => (
        <div
          key={pts.ptsid}
          className='max-w-full grid grid-rows-1 grid-flow-col gap-4 py-2 justify-center text-center'
        >
          <div className='w-4'>{pts.rank}</div>
          <div className='w-36 text-left'>{pts.nname}</div>
          <div className='w-8'>{pts.wincount}</div>
          <div className='w-8'>{pts.tiecount}</div>
          <div className='w-8'>{pts.losecount}</div>
          <div className='w-12'>{pts.pts}</div>
        </div>
        ))}
    </div>
  );
};

export default TablePts;
