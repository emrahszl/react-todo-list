import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [number, setNumber] = useState(7);
  
  const numberChanged = function(e){
    setNumber(e.target.value);
  };

  return (
    <>
      <Head>
        <title>To-Do List</title>
        <meta name="description" content="A sample to do list project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1>To-Do List</h1>
        <input type="number" value={number} onChange={numberChanged} />
        <p>Entered Value : {number}</p>
        <p>Entered number is a {number % 2 == 0 ? <strong>even</strong> : <strong>odd</strong>} number.</p>
      </main>
    </>
  )
}
