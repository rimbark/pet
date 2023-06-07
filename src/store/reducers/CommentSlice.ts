import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CommentType } from '../../models/CommentType'
import { fetchComments, fetchCommentsLength } from './ActionCreators'

interface CommentsState {
  comments: CommentType[]
  totalCommentsCount: number
  error: string
}

const initialState: CommentsState = {
  comments: [],
  totalCommentsCount: 0,
  error: '',
}

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchComments.fulfilled,
      (state, action: PayloadAction<CommentType[]>) => {
        state.error = ''
        state.comments = action.payload
      }
    )
    builder.addCase(
      fetchComments.rejected,
      (state, action: PayloadAction<any>) => {
        state.error = action.payload
      }
    )
    builder.addCase(
      fetchCommentsLength.fulfilled,
      (state, action: PayloadAction<number>) => {
        state.error = ''
        state.totalCommentsCount = action.payload
      }
    )
  },
})

export default commentSlice.reducer
