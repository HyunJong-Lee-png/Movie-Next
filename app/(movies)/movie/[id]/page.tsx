import { Suspense } from 'react'
import MovieDetail from '../../../../components/movie_detail';
import MovieVideo from '../../../../components/movie_video';


export default function AWG({ params: { id } }: { params: { id: string } }) {

  return (
    <div>
      <Suspense fallback={<h1 style={{ display: 'flex', justifyContent: 'center' }}>Movie Loading...</h1>}>
        <MovieDetail id={id} />
      </Suspense>
      <Suspense fallback={<h1 style={{ display: 'flex', justifyContent: 'center', marginTop: 400 }}>Video Loading...</h1>}>
        <MovieVideo id={id} />
      </Suspense>
    </div>
  );
}