import userReducer from './reducers/UserSlice'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { PostAPI } from '../services/PostService'

const rootReducer = combineReducers({
  userReducer,
  [PostAPI.reducerPath]: PostAPI.reducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(PostAPI.middleware),
  })
}

export type rootStore = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
