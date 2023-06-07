import cx from 'classnames'
import React from 'react'
import fb from '../../../images/iconsFooter/facebook.png'
import insta from '../../../images/iconsFooter/instagram.png'
import tg from '../../../images/iconsFooter/telegram.png'
import vk from '../../../images/iconsFooter/vkontakte.png'
import whatsapp from '../../../images/iconsFooter/watsap.png'
import { SocialIconItem } from './SocialIconItem/SocialIconItem'
import styles from './SocialIcons.module.css'

export const SocialIcons = ({ vision }: { vision: boolean }) => {
  const { container, wide, thin } = styles
  return (
    <div className={cx(container, vision ? wide : thin)}>
      <SocialIconItem
        link="https://api.whatsapp.com/send?phone=<79001111111>"
        image={whatsapp}
        altImage="social whatsapp icon"
      />
      <SocialIconItem
        link="https://api.whatsapp.com/send?phone=<79001111111>"
        image={tg}
        altImage="social telegram icon"
      />
      <SocialIconItem
        link="https://api.whatsapp.com/send?phone=<79001111111>"
        image={vk}
        altImage="social vkontakte icon"
      />
      <SocialIconItem
        link="https://api.whatsapp.com/send?phone=<79001111111>"
        image={fb}
        altImage="social facebook icon"
      />
      <SocialIconItem
        link="https://api.whatsapp.com/send?phone=<79001111111>"
        image={insta}
        altImage="social instagram icon"
      />
    </div>
  )
}
