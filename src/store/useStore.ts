import { create } from 'zustand'
import { type TriggerMotion } from '@/types/types'

export const useStore = create((set) => ({
  clicked: false,
  setChangeClick: () => set((state:TriggerMotion) => ({ clicked: !state.clicked }))
}))
