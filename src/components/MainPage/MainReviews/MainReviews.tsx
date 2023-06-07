import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import {
  addNewComment,
  fetchComments,
  fetchCommentsLength,
} from '../../../store/reducers/ActionCreators'
import { Comment } from './Comment/Comment'
import { autoComment } from './MainReviews.constants'
import styles from './MainReviews.module.css'

export const MainReviews = () => {
  const { container, gridContainer, button, prev, next } = styles

  const dispatch = useAppDispatch()

  const { comments, error, totalCommentsCount } = useAppSelector(
    (state) => state.commentReducer
  )

  useEffect(() => {
    window.addEventListener('resize', handleResizeWindow)

    return () => {
      window.removeEventListener('resize', handleResizeWindow)
    }
  }, [])

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    if (windowWidth >= 1400) {
      setViewLimitShow(3)
      if (viewedComment + 2 === totalCommentsCount)
        setViewComment(viewedComment - 1)
    } else if (windowWidth >= 900) {
      setViewLimitShow(2)
      if (viewedComment + 1 === totalCommentsCount)
        setViewComment(viewedComment - 1)
    } else {
      setViewLimitShow(1)
    }
  }, [windowWidth])

  const [viewedComment, setViewComment] = useState(0)
  const [commentsCount, setCommentsCount] = useState(totalCommentsCount)
  const [viewLimitShow, setViewLimitShow] = useState(3)

  const addAutoComment = () => {
    dispatch(addNewComment(autoComment(commentsCount, totalCommentsCount)))
    dispatch(fetchCommentsLength())
    dispatch(
      fetchComments({ viewStart: viewedComment, viewLimit: viewLimitShow })
    )
  }

  const prevPage = () => {
    setViewComment(viewedComment - 1)
  }
  const nexPage = () => {
    setViewComment(viewedComment + 1)
  }

  const handleResizeWindow = () => setWindowWidth(window.innerWidth)

  useEffect(() => {
    dispatch(fetchCommentsLength())
    dispatch(
      fetchComments({ viewStart: viewedComment, viewLimit: viewLimitShow })
    )

    setCommentsCount(totalCommentsCount)
  }, [viewedComment, totalCommentsCount, viewLimitShow])

  return (
    <div className={container}>
      <button
        className={prev}
        disabled={viewedComment === 0}
        onClick={() => prevPage()}
      />
      <div className={gridContainer}>
        {error
          ? error
          : comments.map((item) => (
              <Comment
                key={item.id}
                avatar={item.avatar}
                comment={item.comment}
                name={item.name}
              />
            ))}
      </div>
      <button
        className={next}
        disabled={
          viewLimitShow === 3
            ? viewedComment + 3 === commentsCount
            : viewLimitShow === 2
            ? viewedComment + 2 === commentsCount
            : viewedComment + 1 === totalCommentsCount
        }
        onClick={() => nexPage()}
      />
      <button className={button} onClick={addAutoComment}>
        Добавить комментарий
      </button>
    </div>
  )
}
