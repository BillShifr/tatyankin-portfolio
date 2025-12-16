import { create } from 'zustand'

interface AppState {
  activeSection: string | null
  isDarkMode: boolean
  setActiveSection: (section: string | null) => void
  toggleTheme: () => void
}

export const useAppStore = create<AppState>((set) => ({
  activeSection: null,
  isDarkMode: true,
  setActiveSection: (section) => set({ activeSection: section }),
  toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}))

