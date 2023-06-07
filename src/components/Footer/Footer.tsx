import { Heading, Text } from '@chakra-ui/react'
import React from 'react'
import styles from './Footer.module.css'
import { SocialIcons } from './SocialIcons/SocialIcons'

export const Footer = () => {
  const { container, item } = styles
  return (
    <div className={container}>
      <div className={item}>
        <Heading as="h6" size="sm" color="skyblue">
          НАЛИЧИЕ КРОВИ
        </Heading>
        <Text fontSize="md" color="skyblue">
          Ежедневно, круглосуточно
        </Text>
        <a href="tel:+79001111111">+7-900-111-11-11</a>
        <a href="tel:+79001111111">+7-900-111-11-11</a>
        <a href="mailto:rimbark@gmail.com&body=привет?subject=вопрос">
          rimbark@gmail.com
        </a>
      </div>
      <div className={item}>
        <Heading as="h6" size="sm" color="skyblue">
          СДАТЬ КРОВЬ
        </Heading>
        <Text fontSize="md" color="skyblue">
          По предварительной записи
        </Text>
        <a href="tel:+79001111111">+7-900-111-11-11</a>
        <a href="tel:+79001111111">+7-900-111-11-11</a>
        <Text fontSize="md" color="skyblue">
          Или пишите нам в{' '}
          <a href="https://api.whatsapp.com/send?phone=<79001111111>">
            telegram
          </a>
          /{' '}
          <a href="https://api.whatsapp.com/send?phone=<79001111111>">
            whatsapp
          </a>
        </Text>
      </div>
      <div className={item}>
        <Heading as="h6" size="sm" color="skyblue">
          БАНК КРОВИ
        </Heading>
        <Text fontSize="md" color="skyblue">
          <a href="##">Какая то ветеринарная клиника</a>
        </Text>
        <SocialIcons vision={true} />
        <a
          href="https://www.flaticon.com/ru/free-icons/facebook"
          title="facebook иконки"
        >
          Иконки от Freepik - Flaticon
        </a>
      </div>
      <SocialIcons vision={false} />
    </div>
  )
}
