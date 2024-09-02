import styles from '../css/movie_video.module.css'

interface MovieVideo {
  iso_639_1: string,
  iso_3166_1: string,
  name: string,
  key: string,
  site: string,
  size: number,
  type: string,
  official: boolean,
  published_at: string,
  id: string
}
export default async function MovieVideo({ id }: { id: string }) {

  const result = await fetch(`https://nomad-movies.nomadcoders.workers.dev/movies/${id}/videos`);
  const data: MovieVideo[] = await result.json();
  return (
    <div className={styles.wrapper}>
      {data.slice(0, 9).map(video =>
        <iframe
          key={video.id}
          src={`https://www.youtube.com/embed/${video.key}`}
          title={video.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>
      )}
    </div>
  );
}