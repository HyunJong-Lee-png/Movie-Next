'use client'
import { useRouter } from 'next/navigation';
import styles from '../css/movie.module.css';
import Link from 'next/link';

interface MovieInfo {
  id: number
  title: string
  poster_path: string
}

export default function HA({ id, title, poster_path }: MovieInfo) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/movie/${id}`);
  }
  return (
    <div className={styles.movie} >
      <img className={styles.movie_poster} src={poster_path} alt={title} onClick={handleClick} />
      <Link href={`/movie/${id}`}><span className={styles.movie_title}>{title}</span></Link>
    </div>
  );
}