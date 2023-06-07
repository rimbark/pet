import React from 'react'
import image1 from '../../../images/iconsMain/image1.png'
import image2 from '../../../images/iconsMain/image2.png'
import image3 from '../../../images/iconsMain/image3.png'
import image4 from '../../../images/iconsMain/image4.png'
import image5 from '../../../images/iconsMain/image5.png'
import image6 from '../../../images/iconsMain/image6.png'
import { AdvantagesItem } from './AdvantagesItem/AdvantagesItem'
import styles from './MainAdvantages.module.css'

export const MainAdvantages = () => {
  const { container, gridContainer } = styles
  return (
    <div className={container}>
      <div className={gridContainer}>
        <AdvantagesItem
          image={image1}
          text="Качественные продукты крови, подтвержденные сертификатами"
        />
        <AdvantagesItem
          image={image2}
          text="Качественные продукты крови, подтвержденные сертификатами"
        />
        <AdvantagesItem
          image={image3}
          text="Качественные продукты крови, подтвержденные сертификатами"
        />
        <AdvantagesItem
          image={image4}
          text="Качественные продукты крови, подтвержденные сертификатами"
        />
        <AdvantagesItem
          image={image5}
          text="Качественные продукты крови, подтвержденные сертификатами"
        />
        <AdvantagesItem
          image={image6}
          text="Качественные продукты крови, подтвержденные сертификатами"
        />
      </div>
    </div>
  )
}
