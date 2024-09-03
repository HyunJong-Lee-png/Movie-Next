import styles from '../../css/home.module.css';

export default function AWG() {
  const test = [];
  for (let i = 0; i < 20; i++) {
    test.push(i);
  }
  return (
    <div className={styles.wrapper}>
      {test.map((_, idx) =>
        <div
          key={idx}
          style={
            {
              height: '500px',
              background: 'linear-gradient(180deg, #8e9eab, #eef2f3)',
              borderRadius: '20px',
            }}>
        </div>)}
    </div>
  );
}