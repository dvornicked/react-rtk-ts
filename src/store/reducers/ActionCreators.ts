import { IUser } from './../../models/IUser'
import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchUsers = createAsyncThunk(
  'user/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IUser[]>(
        'https://jsonplaceholder.typicode.com/users'
      )
      return response.data
    } catch (error) {
      thunkAPI.rejectWithValue('Не удалось загрузить пользователей')
    }
  }
)