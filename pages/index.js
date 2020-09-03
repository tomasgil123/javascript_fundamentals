import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    setLoading(true)
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(500)
      }, 2000)
    }).then((result) => {
      setLoading(false)
      setCounter(result)
    })
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading ? <div>Loading...</div> : <div>Not loading anymore</div>}
      <div>Counter: {counter}</div>
    </div>
  )
}
