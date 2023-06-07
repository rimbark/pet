import { Image } from '@chakra-ui/react'
import React from 'react'

export const SocialIconItem = ({
  link,
  image,
  altImage,
}: {
  link: string
  image: string
  altImage: string
}) => {
  return (
    <a href={link}>
      <Image boxSize="40px" src={image} alt={altImage} />
    </a>
  )
}
