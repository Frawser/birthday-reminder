import { create } from "zustand";

export interface Birthday {
  id: string;
  name: string;
  date: string;
}

interface BirthdayState {
  birthdays: Birthday[];
  addBirthday: (birthday: Birthday) => void;
  removeBirthday: (id: string) => void;
  loadBirthdays: () => void;
}

const useBirthdayStore = create<BirthdayState>((set) => ({
  birthdays: [],
  addBirthday: (birthday) =>
    set((state) => {
      const updatedBirthdays = [...state.birthdays, birthday];
      if (typeof window !== "undefined") {
        localStorage.setItem("birthdays", JSON.stringify(updatedBirthdays));
      }
      return { birthdays: updatedBirthdays };
    }),

  removeBirthday: (id) =>
    set((state) => {
      const updatedBirthdays = state.birthdays.filter((b) => b.id !== id);
      if (typeof window !== "undefined") {
        localStorage.setItem("birthdays", JSON.stringify(updatedBirthdays));
      }
      return { birthdays: updatedBirthdays };
    }),

  loadBirthdays: () => {
    if (typeof window !== "undefined") {
      const storedBirthdays = JSON.parse(
        localStorage.getItem("birthdays") || "[]"
      );
      set({ birthdays: storedBirthdays });
    }
  },
}));

export default useBirthdayStore;
