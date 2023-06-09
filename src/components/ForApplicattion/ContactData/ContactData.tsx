import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useEffect, useState } from 'react'
import { FieldErrors, useForm } from 'react-hook-form'
import validator from 'validator'
import { z } from 'zod'
import { useAppDispatch } from '../../../hooks/redux'
import {
  DataType,
  FieldsContentType,
} from '../../../models/initialDndState.types'
import {
  fetchApplications,
  fetchDataForRegistration,
  sendApplication,
} from '../../../store/reducers/ActionCreators'
import styles from './ContactData.module.css'

interface PropsType {
  tableData: FieldsContentType | undefined
}

export const ContactData = ({ tableData }: PropsType) => {
  const dispatch = useAppDispatch()
  const initialValues = {
    name: '',
    email: '',
    phone: '',
  }
  const { container, formContainer } = styles

  const mySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    phone: z
      .string()
      .refine((phone) => validator.isMobilePhone(phone, 'ru-RU')),
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: zodResolver(mySchema),
    defaultValues: initialValues,
    reValidateMode: 'onSubmit',
  })
  const [tableIsFull, setTableIsFull] = useState<boolean>(
    tableData?.dataIds.length === 4
  )
  const onSubmit = (data: typeof initialValues) => {
    console.log('data::::', data)
    reset(initialValues)
    dispatch(fetchApplications())
    dispatch(fetchDataForRegistration())
    const result = {
      id: 0,
      patientData: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        animalType: tableData?.dataIds[0],
        gender: tableData?.dataIds[1],
        age: tableData?.dataIds[2],
        status: tableData?.dataIds[3],
      },
    }
    dispatch(sendApplication(result))
  }
  const onError = (error: FieldErrors) => {
    console.log('error:::', error)
    reset(initialValues)
  }
  console.log(tableData?.dataIds.length)
  console.log(tableIsFull)
  useEffect(() => {
    setTableIsFull(tableData?.dataIds.length === 4)
  }, [tableData])
  return (
    <Box m="15" width="80%">
      <form
        className={formContainer}
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <Box width="200px">
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type="name" {...register('name')} />
            {errors.name && (
              <FormHelperText color="red.400">
                {errors.name.message}
              </FormHelperText>
            )}
          </FormControl>
        </Box>
        <Box width="200px">
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type="email" {...register('email')} />
            {errors.email && (
              <FormHelperText color="red.400">
                {errors.email.message}
              </FormHelperText>
            )}
          </FormControl>
        </Box>
        <Box width="200px">
          <FormControl>
            <FormLabel>Phone</FormLabel>
            <Input type="phone" {...register('phone')} />
            {errors.phone && (
              <FormHelperText color="red.400">
                {errors.phone.message}
              </FormHelperText>
            )}
          </FormControl>
        </Box>
        <FormControl>
          <FormLabel>Sending data</FormLabel>
          <Button colorScheme="teal" type="submit" isDisabled={!tableIsFull}>
            Send Data
          </Button>
        </FormControl>
      </form>
    </Box>
  )
}
