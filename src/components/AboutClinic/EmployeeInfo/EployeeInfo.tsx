import { ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { HiddenBlock } from '../../HiddenBlock/HiddenBlock'
import { ModalWindow } from '../../ModalWindow/ModalWindow'
import styles from './EmployeeInfo.module.css'
import { EmployeeInfoProps } from './EmployeeInfo.types'

export const EmployeeInfo = ({
  name,
  post,
  history,
  photo,
}: EmployeeInfoProps) => {
  const { container, hiddenContent, employeePhoto } = styles
  const OverlayOne = () => (
    <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
  )
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = React.useState(<OverlayOne />)

  return (
    <div className={container}>
      <img src={photo} alt="empoyee avatar" className={employeePhoto} />
      <div
        role="button"
        tabIndex={0}
        className={hiddenContent}
        onClick={() => {
          setOverlay(<OverlayOne />)
          onOpen()
        }}
      >
        <HiddenBlock head={name} post={post} text={history} />
      </div>
      <ModalWindow
        head={name}
        text={history}
        photo={photo}
        isOpenOut={isOpen}
        onClose={onClose}
        overlay={overlay}
      />
    </div>
  )
}
