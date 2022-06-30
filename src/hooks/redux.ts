import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, rootStore } from '../store/store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<rootStore>  = useSelector
