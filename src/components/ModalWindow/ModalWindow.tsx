import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import styles from './ModalWindow.module.css'
import { ModalWindowProps } from './ModalWindow.types'

export const ModalWindow = ({
  head,
  post,
  photo,
  text,
  onClose,
  overlay,
  isOpenOut,
}: ModalWindowProps) => {
  const { modalBodyContainer } = styles

  return (
    <Modal isCentered isOpen={isOpenOut} onClose={onClose} size="3xl">
      {overlay}
      <ModalContent>
        <ModalHeader>{head}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div className={modalBodyContainer}>
            <div>
              <Image src={photo} height="600px" />
            </div>
            <div>
              <Text fontSize="xl">{post && null}</Text>
              <Text width="250px">{text}</Text>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
