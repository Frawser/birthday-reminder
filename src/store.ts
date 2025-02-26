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
}

const useBirthdayStore = create<BirthdayState>((set) => ({
  birthdays: JSON.parse(localStorage.getItem("birthdays") || "[]"),
  addBirthday: (birthday) =>
    set((state) => {
      const updatedBirthdays = [...state.birthdays, birthday];
      localStorage.setItem("birthdays", JSON.stringify(updatedBirthdays));
      return { birthdays: updatedBirthdays };
    }),
  removeBirthday: (id) =>
    set((state) => {
      const updatedBirthdays = state.birthdays.filter((b) => b.id !== id);
      localStorage.setItem("birthdays", JSON.stringify(updatedBirthdays));
      return { birthdays: updatedBirthdays };
    }),
}));

export default useBirthdayStore;
