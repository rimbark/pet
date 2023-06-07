import React, { FC } from 'react'
import { MainAdvantages } from './MainAdvantages/MainAdvantages'
import { MainDonors } from './MainDonors/MainDonors'
import styles from './MainPage.module.css'
import { MainRecipient } from './MainRecipient/MainRecipient'
import { MainReviews } from './MainReviews/MainReviews'

export const MainPage: FC = () => {
  const { container } = styles
  return (
    <div className={container}>
      <MainRecipient />
      <MainAdvantages />
      <MainDonors />
      <MainReviews />
    </div>
  )
}
