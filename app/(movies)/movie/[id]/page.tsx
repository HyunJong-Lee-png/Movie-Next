import { Suspense } from 'react'
import MovieDetail, { MovieDetail as MovieDetailType } from '../../../../components/movie_detail';
import MovieVideo from '../../../../components/movie_video';
import { Metadata } from 'next';

export async function generateMetadata({ params: { id } }: { params: { id: string } }): Promise<Metadata> {
  const result = await fetch(`https://nomad-movies.nomadcoders.workers.dev/movies/${id}`);
  const data: MovieDetailType = await result.json();

  return {
    title: data.title ? data.title : 'Anonymous'
  }
}
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