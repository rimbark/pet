import { Heading, Text } from '@chakra-ui/react'
import React from 'react'
import styles from './HiddenBlock.module.css'
import { HiddenBlockProps } from './HiddenBlock.types'

export const HiddenBlock = ({ post, text, head }: HiddenBlockProps) => {
  const { container } = styles
  return (
    <div role="button" tabIndex={0} className={container}>
      <Heading>{head}</Heading>
      <Text fontSize="2xl">{post}</Text>
      <Text fontSize="xl" noOfLines={1} maxWidth="300px">
        {text}
      </Text>
    </div>
  )
}
