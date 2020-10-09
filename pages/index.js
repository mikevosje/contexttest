import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect } from "react";
import { useDispatch, useGlobalState } from "../lib/useStore";
import Link from "next/link";

export default function Home() {
  const dispatch = useDispatch();
  const activity = useGlobalState('activities');
  
  useEffect(() => {
    async function getData() {
      const res = await fetch('https://login.uitjesplaats.nl/api/filter');
      const newData = await res.json();
      dispatch({ type: 'UPDATE_ACTIVITIES', activities: newData.activities });
    }
    
    getData();
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">{activity ? activity.length : 0} activities</a>
        </h1>
        
        <Link href={'/subpage'}>Go to link</Link>
        
        {activity && activity.length > 0 && activity.map((item, key) => (
          <div style={{marginBottom: '80px'}}>
            <Link href={'/subpage'}>{item.name}</Link>
          </div>
        ))}
        <Link href={'/subpage'}>Go to link</Link>
      </main>
    
    
    </div>
  )
}
