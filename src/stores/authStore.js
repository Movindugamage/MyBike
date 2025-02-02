import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useAuthStore = create(persist((set) => ({
  token: null,
  setToken: (token) => set({ token }),
  firstName: null,
    setFirstName: (firstName) => set({ firstName }),
}),{
    name: 'auth-storage',
}))