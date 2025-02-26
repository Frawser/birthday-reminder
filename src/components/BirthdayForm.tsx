"use client";
import { useForm } from "react-hook-form";
import useBirthdayStore, { Birthday } from "@/store";
import { v4 } from "uuid";

interface FromData {
    name: string;
    date: string;
}

const BirthdayForm: React.FC = () => {
    const { register, handleSubmit, reset } = useForm<FromData>();
    const addBirthday = useBirthdayStore((state) => state.addBirthday);

    const onSubmit = (data: FromData) => {
        const birthday: Birthday = {
            id: v4(),
            name: data.name,
            date: data.date,
        };
        addBirthday(birthday);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Name"
                className="input"
            />
            <input
                {...register("date", { required: true })}
                type="date"
                placeholder="Date"
                className="input"
            />
            <button type="submit" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Add</button>
        </form>
    );
};

export default BirthdayForm;