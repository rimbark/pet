import React from 'react'
import styles from './MyButton.module.css'

export const MyButton = ({ text }: { text: string }) => {
  const { container } = styles
  return <button className={container}>{text}</button>
}
