import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../index'

interface UIState {
  loading: boolean
}

const initialState: UIState = {
  loading: false,
}

export const UISlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true
    },
    stopLoading: (state) => {
      state.loading = false
    },
  },
})

export const { startLoading, stopLoading } = UISlice.actions
export const getLoadingState = (state: RootState) => state.UI.loading

export default UISlice.reducer