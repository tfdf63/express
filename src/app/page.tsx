import Header from './components/header';
import TablePts from './components/pts';
import PostList from './list/list';
import TablePost from './tabletop/tabletop';

export default function Home() {
  return (
    <>
      <main className='font-sans flex min-h-screen flex-col items-center bg-slate-200'>
        <div className='w-11/12'>
          <Header />
          <TablePts />
          <PostList />
          <TablePost />
        </div>
      </main>
    </>
  );
}
