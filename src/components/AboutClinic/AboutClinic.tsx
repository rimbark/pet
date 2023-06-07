import { Heading, Text } from '@chakra-ui/react'
import React, { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchEmployees } from '../../store/reducers/ActionCreators'
import styles from './AboutClinic.module.css'
import { EmployeeInfo } from './EmployeeInfo/EployeeInfo'

export const AboutClinic: FC = () => {
  const { container, gridContainer } = styles
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchEmployees())
  }, [])
  const { employees } = useAppSelector((state) => state.employeeReducer)
  return (
    <div className={container}>
      <Heading as="h1">О НАС</Heading>
      <Text marginTop="20px" marginBottom="20px" fontSize="xl">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </Text>
      <Heading as="h2">НАШИ ВРАЧИ</Heading>
      <div className={gridContainer}>
        {employees.map((employee) => (
          <EmployeeInfo
            key={employee.id}
            name={employee.name}
            post={employee.post}
            photo={employee.photo}
            history={employee.history}
          />
        ))}
      </div>
    </div>
  )
}
