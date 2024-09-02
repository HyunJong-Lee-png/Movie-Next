'use client'
import styles from '../css/navigation.module.css'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation(){
  const pathName = usePathname();

  console.log('navo')

  return(
    <nav>
      <ul className={styles.wrapper}>
        <li><Link href={'/'}>Home</Link>{pathName === '/' && '🔥'}</li>
        <li><Link href={'/about-us'}>About-us</Link>{pathName === '/about-us' && '🔥'}</li>
      </ul>
    </nav>
  );
}