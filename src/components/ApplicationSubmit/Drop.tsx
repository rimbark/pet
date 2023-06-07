import { Heading } from '@chakra-ui/react'
import cn from 'classnames'
import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import {
  ContentType,
  FieldsContentType,
} from '../../models/initialDndState.types'
import { Drag } from './Drag'
import styles from './DragDrop.module.css'

export const Drop = ({
  section,
  column,
}: {
  section: ContentType[]
  column: FieldsContentType
}) => {
  const { container, dropContainer, drop } = styles
  return (
    <div className={container}>
      <Heading size="lg" padding="5px" height="100px">
        {column.title}
      </Heading>
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <div
            className={cn(dropContainer, snapshot.isDraggingOver ? drop : '')}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {section.map((chapter, index) => (
              <Drag
                key={chapter.id.toString()}
                index={index}
                id={chapter.id.toString()}
                content={chapter.content}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}
