import { Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import mainImage from '../../../images/backgroundImages/proactive.png'
import { MyButton } from '../../Button/MyButton'
import styles from './MainRecipient.module.css'

export const MainRecipient = () => {
  const { container, heading } = styles
  return (
    <div className={container}>
      <div className={heading}>
        <Heading as="h1" size="2xl" zIndex={5}>
          ВАШЕМУ ПИТОМЦУ НУЖНА КРОВЬ?
        </Heading>
        <Text>Вместе с Вами спасаем жизни животных!</Text>
        <MyButton text="СВЯЗАТЬСЯ С НАМИ" />
      </div>
      <Image src={mainImage} />
    </div>
  )
}
