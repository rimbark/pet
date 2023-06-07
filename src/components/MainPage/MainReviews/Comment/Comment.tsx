import { Image } from '@chakra-ui/react'
import React from 'react'
import styles from './Comment.module.css'
import { ICommentProps } from './comment.types'

export const Comment = ({ avatar, comment, name }: ICommentProps) => {
  const { container, avatarissimo } = styles
  return (
    <div className={container}>
      <Image src={avatar} alt="user avatar" className={avatarissimo} />
      <div>{comment}</div>
      <div>{name}</div>
    </div>
  )
}
