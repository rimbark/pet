import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { ApplicationType } from '../../models/ActionCreators.types'
import { CommentType } from '../../models/CommentType'
import { DonorsPhotoType } from '../../models/DonorsPhotoType.types'
import { EmployeeType } from '../../models/EmployeeType.types'
import { RegistrationDataType } from '../../models/initialDndState.types'

export const fetchCommentsLength = createAsyncThunk<number, void>(
  'comments/fetchCommentsLength',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<CommentType[]>(
        `http://localhost:3001/comments`
      )
      return response.data.length
    } catch (error) {
      return thunkAPI.rejectWithValue('Не удалось загрузить комментарии')
    }
  }
)

export const fetchComments = createAsyncThunk(
  'comments/fetchComments',
  async (
    { viewStart, viewLimit }: { viewStart: number; viewLimit: number },
    thunkAPI
  ) => {
    try {
      const response = await axios.get<CommentType[]>(
        `http://localhost:3001/comments?_start=${viewStart}&_limit=${viewLimit}`
      )
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue('Не удалось загрузить комментарии')
    }
  }
)

export const addNewComment = createAsyncThunk(
  'comments/addNewComment',
  async ({ id, avatar, name, comment }: CommentType, thunkAPI) => {
    try {
      await axios.post('http://localhost:3001/comments', {
        id,
        avatar,
        name,
        comment,
      })
    } catch (error) {
      return thunkAPI.rejectWithValue('Не удалось загрузить комментарий')
    }
  }
)

export const fetchEmployees = createAsyncThunk(
  'employees/fetchEmployees',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<EmployeeType[]>(
        'http://localhost:3001/doctors'
      )
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue('Не удалось загрузить сотрудников')
    }
  }
)

export const fetchDonorsPhoto = createAsyncThunk(
  'donors/fetchDonorsPhoto',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<DonorsPhotoType[]>(
        'https://jsonplaceholder.typicode.com/photos?_limit=200'
      )
      return response.data
    } catch {
      return thunkAPI.rejectWithValue(
        'Не удалось подгрузить фоточки наших доноров'
      )
    }
  }
)

export const fetchDataForRegistration = createAsyncThunk(
  'visitors/fetchDataForRegistration',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<RegistrationDataType>(
        'http://localhost:3001/registrationData'
      )
      return response.data
    } catch {
      return thunkAPI.rejectWithValue(
        'Не удалось подгрузить данные для подачи заявки'
      )
    }
  }
)

export const fetchApplicationList = createAsyncThunk(
  'visitors/fetchApplications',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<ApplicationType[]>(
        'http://localhost:3001/applications'
      )
      return response.data
    } catch {
      return thunkAPI.rejectWithValue('Не удалось загрузить активные заявки')
    }
  }
)
export const sendApplication = createAsyncThunk(
  'visitors/sendApplication',
  async (application: ApplicationType, thunkAPI) => {
    try {
      const count = fetchApplicationList.fulfilled.length
      application.id = count
      await axios.post('http://localhost:3001/applications', application)
    } catch {
      return thunkAPI.rejectWithValue('Вы уже есть в списке')
    }
  }
)
