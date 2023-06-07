import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RegistrationDataType } from '../../models/initialDndState.types'
import { fetchDataForRegistration } from './ActionCreators'

interface InitialStateType {
  registrationData: RegistrationDataType
  error: string
}

interface ToDeleteType {
  fieldIdToDelete: string
  indexToDelete: number
  idToAdd: string
  indexToAdd: number
}

const initialState: InitialStateType = {
  registrationData: {
    data: {},
    fields: {},
    fieldsOrder: [],
  },
  error: '',
}

export const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    changeFields: (state, action: PayloadAction<ToDeleteType>) => {
      const data = action.payload
      state.registrationData.fields[data.fieldIdToDelete].dataIds.splice(
        data.indexToDelete,
        1
      )
      state.registrationData.fields.inputTable.dataIds.splice(
        data.indexToAdd,
        0,
        data.idToAdd
      )
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchDataForRegistration.fulfilled,
      (state, action: PayloadAction<RegistrationDataType>) => {
        state.error = ''
        state.registrationData = action.payload
      }
    )
  },
})

export const { changeFields } = registrationSlice.actions
export default registrationSlice.reducer
