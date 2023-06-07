import { Image, Text } from '@chakra-ui/react'
import React from 'react'
import styles from '../MainAdvantages.module.css'
import { AdvantagesItemProps } from './AdvantagesItem.types'

export const AdvantagesItem = ({ image, text }: AdvantagesItemProps) => {
  const { gridItem } = styles
  return (
    <div className={gridItem}>
      <Image src={image} />
      <Text>{text}</Text>
    </div>
  )
}
