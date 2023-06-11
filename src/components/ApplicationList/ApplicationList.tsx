import React, { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchApplicationList } from '../../store/reducers/ActionCreators'
import { MyTable } from '../Table/MyTable'
import styles from './ApplicationList.module.css'

export const ApplicationList: FC = () => {
  const { container } = styles
  const dispatch = useAppDispatch()
  const applicationList = useAppSelector(
    (state) => state.applicationReducer.applications
  )

  const patients = applicationList.map((item) => {
    const itemField = item.patientData
    return {
      id: item.id,
      name: itemField.name,
      email: itemField.email,
      phone: itemField.phone,
      animalType: itemField.animalType,
      gender: itemField.gender,
      age: itemField.age,
      status: itemField.status,
    }
  })
  useEffect(() => {
    dispatch(fetchApplicationList())
  }, [])
  return (
    <div className={container}>
      <MyTable data={patients} />
    </div>
  )
}
