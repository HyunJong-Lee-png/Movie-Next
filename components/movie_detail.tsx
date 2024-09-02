import Link from 'next/link';
import styles from '../css/movie_detail.module.css'

interface MovieDetail {
  adult: boolean,
  backdrop_path: string,
  belongs_to_collection: null | BelongsToCollection,
  budget: number,
  genres: null | Omit<BelongsToCollection, 'poster_path' | 'backdrop_path'>[],
  homepage: string,
  id: number,
  imdb_id: string,
  origin_country: string[],
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  production_companies: null | ProductionCompanies[],
  production_countries: null | ProductionCountries[],
  release_date: string,
  revenue: number,
  runtime: number,
  spoken_languages: null | SpokenLanguages[],
  status: string,
  tagline: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number

}

interface BelongsToCollection {
  id: number,
  name: string,
  poster_path: string,
  backdrop_path: string
}

interface ProductionCompanies {
  id: number,
  logo_path: string
  name: string;
  origin_country: string;
}

interface ProductionCountries {
  iso_3166_1: string;
  name: string;
}

interface SpokenLanguages {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export default async function MovieDetail({ id }: { id: string }) {

  const result = await fetch(`https://nomad-movies.nomadcoders.workers.dev/movies/${id}`);
  const data: MovieDetail = await result.json();
  return (
    <div className={styles.wrapper}>
      <img className={styles.poster} src={data.poster_path} alt={data.title} />
      <div className={styles.info}>
        <span className={styles.title}>{data.title}</span>
        <span className={styles.vote_average}>⭐{data.vote_average.toFixed(2)}</span>
        <span className={styles.overview}>{data.overview}</span>
        <span ><Link href={data.homepage}>Homepage &rarr;</Link></span>
      </div>
    </div >
  );
}