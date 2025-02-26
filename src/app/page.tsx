"use client";
import BirthdayForm from "@/components/BirthdayForm";
import BirthdayList from "@/components/BirthdayList";

export default function Home() {
  return (
    <main className="max-w-md mx-auto mt-10 p-4 bg-white shadow-lg rounded-lg text-gray-700">
      <h1 className="text-xl font-bold text-center">🎂 Birthday Reminder</h1>
      <BirthdayForm />
      <BirthdayList />
    </main>
  );
}
