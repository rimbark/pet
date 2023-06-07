import { HamburgerIcon } from '@chakra-ui/icons'
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import React from 'react'
import styles from '../MyMenu.module.css'

export const Sandwich = () => {
  const { sandwich } = styles

  return (
    <div className={sandwich}>
      <Menu>
        <MenuButton
          alignSelf="center"
          boxSize="55px"
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon boxSize="35px" />}
          variant="outline"
        />
        <MenuList>
          <MenuItem justifyContent="center">ГЛАВНАЯ</MenuItem>
          <MenuItem justifyContent="center">О КЛИНИКЕ</MenuItem>
          <MenuItem justifyContent="center">НАШИ ДОНОРЫ</MenuItem>
          <MenuItem justifyContent="center">ДОНОРАМ</MenuItem>
          <MenuItem justifyContent="center">РЕЦИПИЕНТАМ</MenuItem>
          <MenuItem justifyContent="center">КОНАКТЫ</MenuItem>
        </MenuList>
      </Menu>
    </div>
  )
}
