import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchDonorsPhoto } from '../../store/reducers/ActionCreators'
import styles from './AboutDonors.module.css'
import { DonorsPhoto } from './DonorsPhoto/DonorsPhoto'

export const AboutDonors = () => {
  const { container } = styles
  const dispatch = useAppDispatch()
  const { photos } = useAppSelector((state) => state.donorsPhotoReducer)
  useEffect(() => {
    dispatch(fetchDonorsPhoto())
  }, [])
  return (
    <div className={container}>
      {photos.map((item) => (
        <DonorsPhoto
          key={item.id}
          id={item.id}
          width={400}
          height={400}
          alt={item.title}
          src={item.url}
        />
      ))}
    </div>
  )
}
