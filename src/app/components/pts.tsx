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
      <h1 className={`mt-12 mb-3 text-xl font-semibold`}>Турнирная таблица</h1>
      {ptss.map((pts) => (
        <div
          key={pts.ptsid}
          className='grid grid-rows-1 grid-flow-col auto-cols-min gap-4 py-2 text-sm  text-center items-center  shadow-sm mb-2'
        >
          <div className='w-8'>{pts.rank}</div>
          <div className='w-24 text-left'>{pts.nname}</div>
          <div className='w-8'>{pts.wincount}</div>
          <div className='w-8'>{pts.tiecount}</div>
          <div className='w-8'>{pts.losecount}</div>
          <div className='w-12 bg-red-200'>{pts.pts}</div>
        </div>
      ))}
    </div>
  );
};

export default TablePts;
