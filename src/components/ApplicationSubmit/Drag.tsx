import cn from 'classnames'
import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import styles from './DragDrop.module.css'

export const Drag = ({
  id,
  content,
  index,
}: {
  id: string
  content: string
  index: number
}) => {
  const { dragContainer, drag } = styles
  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={cn(dragContainer, snapshot.isDragging ? drag : '')}
        >
          {content}
        </div>
      )}
    </Draggable>
  )
}
