import { combineReducers, configureStore } from '@reduxjs/toolkit'
import applicationReducer from './reducers/Applications'
import commentReducer from './reducers/CommentSlice'
import donorsPhotoReducer from './reducers/DonorsPhotoSlice'
import employeeReducer from './reducers/EmployeeInfoSlice'
import registrationDataReducer from './reducers/RegistrationSlice'

export const rootReducer = combineReducers({
  commentReducer,
  employeeReducer,
  donorsPhotoReducer,
  registrationDataReducer,
  applicationReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
