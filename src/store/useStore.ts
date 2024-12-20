import { create } from 'zustand'

export const useStore = create((set) => ({
  clicked: false,
  setChangeClick: () => set((state) => ({ clicked: !state.clicked }))
}))
