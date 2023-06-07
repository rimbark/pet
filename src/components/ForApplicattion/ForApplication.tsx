import React, { FC, useEffect } from 'react'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchDataForRegistration } from '../../store/reducers/ActionCreators'
import { changeFields } from '../../store/reducers/RegistrationSlice'
import { Drop } from '../ApplicationSubmit/Drop'
import { ContactData } from './ContactData/ContactData'
import styles from './ForApplication.module.css'

export const ForApplication: FC = () => {
  const { container, droppable } = styles
  const dispatch = useAppDispatch()
  const dndColumns = useAppSelector(
    (state) => state.registrationDataReducer.registrationData
  )

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result

    if (!destination) {
      return
    }

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return
    }
    if (destination.droppableId === 'inputTable') {
      const changes = {
        fieldIdToDelete: source.droppableId,
        indexToDelete: source.index,
        idToAdd: draggableId,
        indexToAdd: destination.index,
      }
      dispatch(changeFields(changes))
    }
  }

  useEffect(() => {
    dispatch(fetchDataForRegistration())
  }, [])
  console.log(dndColumns)
  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className={container}>
          {dndColumns.fieldsOrder.map((fieldId) => {
            const column = dndColumns.fields[fieldId]
            const content = column.dataIds.map(
              (contentId) => dndColumns.data[contentId]
            )
            return (
              <div key={column.id} className={droppable}>
                <Drop column={column} section={content} />
              </div>
            )
          })}
        </div>
      </DragDropContext>
      <ContactData />
    </>
  )
}
