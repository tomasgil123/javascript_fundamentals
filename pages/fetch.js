import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((result) => result.json())
      .then((result) => {
        setLoading(false)
        setCounter(result.id)
      })
    setCounter(500)
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
