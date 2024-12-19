import { create } from 'zustand'

export const useStore = create((set) => ({
  clicked: false,
  setClicked: set((state) => ({ clicked: state.clicked }))
}))
