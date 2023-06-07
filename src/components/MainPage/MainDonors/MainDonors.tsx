import { Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import mainImage from '../../../images/backgroundImages/petsWantToHelp.png'
import { MyButton } from '../../Button/MyButton'
import styles from './MainDonors.module.css'

export const MainDonors = () => {
  const { container, heading } = styles
  return (
    <div className={container}>
      <Image src={mainImage} boxSize="400px" />
      <div className={heading}>
        <Heading as="h1" size="2xl" zIndex={5}>
          ВАШЕМУ ПИТОМЦУ НУЖНА КРОВЬ?
        </Heading>
        <Text>
          Донорство не только безопасно, но и полезно! Помимо спасения жизней
          других животных, Ваш любимец всегда будет обследован. Наши специалисты
          сделают все возможное, чтобы позаботиться о здоровье Вашего
          четвероногого героя. Более того, донорство крови способствует ее
          регулярному обновлению, что положительно сказывается на состоянии
          организма.
        </Text>
        <MyButton text="УЗНАТЬ БОЛЬШЕ" />
      </div>
    </div>
  )
}
