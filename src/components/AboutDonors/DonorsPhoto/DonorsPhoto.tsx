import { ModalOverlay, useDisclosure } from '@chakra-ui/react'
import useNativeLazyLoading from '@charlietango/use-native-lazy-loading'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { HiddenBlock } from '../../HiddenBlock/HiddenBlock'
import { ModalWindow } from '../../ModalWindow/ModalWindow'
import styles from './DonorsPhoto.module.css'
import { DonorsPhotoProps } from './DonorsPhoto.types'

export const DonorsPhoto = ({
  id,
  width,
  height,
  src,
  alt,
  ...rest
}: DonorsPhotoProps) => {
  const { item, hiddenContent } = styles
  const OverlayOne = () => (
    <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
  )
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = React.useState(<OverlayOne />)
  const supportsLazyLoading = useNativeLazyLoading()
  const { ref, inView } = useInView({
    triggerOnce: true,
    skip: supportsLazyLoading === true,
  })

  return (
    <div ref={ref} data-inview={inView} className={item}>
      {inView || supportsLazyLoading ? (
        <img
          {...rest}
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
        />
      ) : null}
      <div
        role="button"
        tabIndex={0}
        className={hiddenContent}
        onClick={() => {
          setOverlay(<OverlayOne />)
          onOpen()
        }}
      >
        <HiddenBlock head={id.toString()} text={alt} />
      </div>
      <ModalWindow
        head={id.toString()}
        text={alt}
        photo={src}
        isOpenOut={isOpen}
        onClose={onClose}
        overlay={overlay}
      />
    </div>
  )
}
