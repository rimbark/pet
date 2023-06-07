import { Image } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../images/backgroundImages/logo.png'
import { RouteNames } from '../../routes/routes'
import styles from './Header.module.css'
import { MyMenu } from './MyMenu/MyMenu'

export const Header = () => {
  const navigate = useNavigate()
  const { container, outSideContainer, heart } = styles
  return (
    <div className={outSideContainer}>
      <div className={container}>
        <Image
          boxSize="100px"
          src={logo}
          alt="company logo"
          onClick={() => navigate(RouteNames.MAIN)}
        />
        <MyMenu />
      </div>
      <div className={heart} />
    </div>
  )
}
