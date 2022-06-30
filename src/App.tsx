import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './hooks/redux'
import { fetchUsers } from './store/reducers/ActionCreators'

export const App = () => {
  const dispatch = useAppDispatch()
  const { users, isLoading, error } = useAppSelector(state => state.userReducer)
  useEffect(() => {
    dispatch(fetchUsers())
  }, [])
  return (
    <div>
      {isLoading && <h1>Загрузка...</h1>}
      {error && <h1>{error}</h1>}
      <div>{JSON.stringify(users, null, 2)}</div>
    </div>
  )
}
