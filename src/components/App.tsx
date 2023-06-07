import React from 'react'
import styles from './App.module.css'
import { AppRouter } from './AppRouter'
import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'

export const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <AppRouter />
      <Footer />
    </div>
  )
}
