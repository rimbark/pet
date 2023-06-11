import cn from 'classnames'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RouteNames } from '../../../routes/routes'
import styles from './MyMenu.module.css'
import { Sandwich } from './Sandwich/Sandwich'

export const MyMenu = () => {
  const navigate = useNavigate()
  const [isVisionBlock1, setIsVisionBlock1] = useState(false)
  const [isVisionBlock2, setIsVisionBlock2] = useState(false)
  const [isVisionBlock3, setIsVisionBlock3] = useState(false)
  const [isVisionLine, setIsVisionLine] = useState(false)
  const {
    container,
    menu,
    menuItem1,
    menuItem2,
    menuItem3,
    hiddenBlock1,
    hiddenBlock2,
    hiddenBlock3,
    active,
    subItem1,
    subItem2,
    subItem3,
    subItem4,
  } = styles

  const toGo = (path: string) => {
    navigate(path)
  }

  return (
    <div className={container}>
      <div className={cn(menu, isVisionLine ? active : '')}>
        <div
          onMouseEnter={() => {
            setIsVisionBlock1(true)
            setIsVisionLine(true)
          }}
          onMouseLeave={() => {
            setIsVisionBlock1(false)
            setIsVisionLine(false)
          }}
          className={menuItem1}
        >
          <div
            role="button"
            tabIndex={0}
            onClick={() => toGo(RouteNames.CLINIC)}
          >
            О НАС
          </div>
          <div className={cn(hiddenBlock1, isVisionBlock1 ? active : '')}>
            <div
              role="button"
              tabIndex={0}
              onClick={() => toGo(RouteNames.CLINIC)}
              className={subItem1}
            >
              О КЛИНИКЕ
            </div>
            <div
              role="button"
              tabIndex={0}
              onClick={() => toGo(RouteNames.DONORS)}
              className={subItem2}
            >
              НАШИ ДОНОРЫ
            </div>
          </div>
        </div>
        <div
          onMouseEnter={() => {
            setIsVisionBlock2(true)
            setIsVisionLine(true)
          }}
          onMouseLeave={() => {
            setIsVisionBlock2(false)
            setIsVisionLine(false)
          }}
          className={menuItem2}
        >
          <div
            role="button"
            tabIndex={0}
            onClick={() => toGo(RouteNames.FOR_DONORS)}
          >
            ПОДРОБНЕЕ
          </div>
          <div className={cn(hiddenBlock2, isVisionBlock2 ? active : '')}>
            <div
              role="button"
              tabIndex={0}
              onClick={() => toGo(RouteNames.FOR_DONORS)}
              className={subItem3}
            >
              ПОДАТЬ ЗАЯВКУ
            </div>
            <div
              role="button"
              tabIndex={0}
              onClick={() => toGo(RouteNames.FOR_RECIPIENTS)}
              className={subItem4}
            >
              СПИСОК ЗАЯВОК
            </div>
          </div>
        </div>
        <div
          onMouseEnter={() => {
            setIsVisionBlock3(true)
            setIsVisionLine(true)
          }}
          onMouseLeave={() => {
            setIsVisionBlock3(false)
            setIsVisionLine(false)
          }}
          className={menuItem3}
        >
          <div
            role="button"
            tabIndex={0}
            onClick={() => toGo(RouteNames.CONTACTS)}
          >
            КОНТАКТЫ
          </div>
          <div className={cn(hiddenBlock3, isVisionBlock3 ? active : '')} />
        </div>
      </div>
      <Sandwich />
    </div>
  )
}
