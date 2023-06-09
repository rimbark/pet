import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ApplicationType } from '../../models/ActionCreators.types'
import { fetchApplications } from './ActionCreators'

interface InitialStateType {
  applications: ApplicationType[]
  error: string
}

const initialState: InitialStateType = {
  applications: [],
  error: '',
}
export const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchApplications.fulfilled,
      (state, action: PayloadAction<ApplicationType[]>) => {
        state.applications = action.payload
      }
    )
  },
})

export default applicationSlice.reducer
