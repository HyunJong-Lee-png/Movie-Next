import styles from '../css/movie.module.css';

interface MovieInfo {
  id: number
  title: string
  poster_path: string
}

export default function HA({ id, title, poster_path }: MovieInfo) {
  console.log('hahah')

  return (
    <div className={styles.movie} >
      <img className={styles.movie_poster} src={poster_path} alt={title} />
      <span className={styles.movie_title}>{title}</span>
    </div>
  );
}