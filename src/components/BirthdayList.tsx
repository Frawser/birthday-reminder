"use client";
import useBirthdayStore from "../store";
import { format } from "date-fns";

const BirthdayList: React.FC = () => {
  const { birthdays, removeBirthday } = useBirthdayStore();

  return (
    <div className="mt-4">
      <h2 className="text-lg font-bold">Upcoming Birthdays</h2>
      <ul className="mt-2">
        {birthdays.map((b) => (
          <li key={b.id} className="flex justify-between items-center p-2 border-b">
            <span>{b.name} - {format(new Date(b.date), "MMMM dd, yyyy")}</span>
            <button type="button" onClick={() => removeBirthday(b.id)}  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BirthdayList;
