import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DonorsPhotoType } from '../../models/DonorsPhotoType.types'
import { fetchDonorsPhoto } from './ActionCreators'

interface PhotoType {
  photos: DonorsPhotoType[]
  isFetching: boolean
  totalPhotosCount?: number
  error: string
}

const initialState: PhotoType = {
  photos: [],
  isFetching: false,
  totalPhotosCount: 0,
  error: '',
}

const donorsPhotoSlice = createSlice({
  name: 'donors_photo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchDonorsPhoto.fulfilled,
      (state, action: PayloadAction<DonorsPhotoType[]>) => {
        state.photos = action.payload
        state.error = ''
      }
    )
    builder.addCase(fetchDonorsPhoto.pending, (state) => {
      state.isFetching = true
      state.error = ''
    })
    builder.addCase(
      fetchDonorsPhoto.rejected,
      (state, action: PayloadAction<any>) => {
        state.isFetching = false
        state.error = action.payload
      }
    )
  },
})

export default donorsPhotoSlice.reducer
