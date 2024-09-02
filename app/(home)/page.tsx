import { Metadata } from 'next';
import Movie from '../../components/movie';
import styles from '../../css/home.module.css';

interface Movie {
  adult: boolean,
  backdrop_path: string,
  genre_ids: number[],
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}

export const metadata: Metadata = {
  title: 'Movies',
  description: 'Latest Movies'
}

export default async function A() {
  const data = await fetch('https://nomad-movies.nomadcoders.workers.dev/movies');
  const result: Movie[] = await data.json();

  return (
    <div className={styles.wrapper}>
      {result.map(movie => <Movie key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path} />)}
    </div>
  );
}