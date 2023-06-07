import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { EmployeeType } from '../../models/EmployeeType.types'
import { fetchEmployees } from './ActionCreators'

interface EmployeeState {
  employees: EmployeeType[]
  error: string
}

const initialState: EmployeeState = {
  employees: [],
  error: '',
}

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchEmployees.fulfilled,
      (state, action: PayloadAction<EmployeeType[]>) => {
        state.error = ''
        state.employees = action.payload
      }
    )
  },
})

export default employeeSlice.reducer
