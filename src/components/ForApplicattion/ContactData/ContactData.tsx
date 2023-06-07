import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from '@chakra-ui/react'
import React, { ChangeEvent, useState } from 'react'
import styles from './ContactData.module.css'

export const ContactData = () => {
  const { container } = styles
  const [input, setInput] = useState('')
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value)
  const isError = input === ''

  return (
    <FormControl className={container}>
      <FormLabel>Email</FormLabel>
      <Input type="email" value={input} onChange={handleInputChange} />
      {!isError ? (
        <FormHelperText>
          Enter the email you'd like to receive the information.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
      <FormLabel>Phone</FormLabel>
      <Input type="phone" value={input} onChange={handleInputChange} />
      {!isError ? (
        <FormHelperText>
          Enter the phone you'd like to receive the information.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Phone is required.</FormErrorMessage>
      )}
      <Button mt={4} colorScheme="teal" type="submit">
        Send data
      </Button>
    </FormControl>
  )
}
