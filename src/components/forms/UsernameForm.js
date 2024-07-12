"use client"
import yoinkUsername from "@/actions/yoinkUsername";
import Right from "../icons/Right";
import { useState } from "react";
import { redirect } from "next/navigation";
import SubmitButton from "../buttons/SubmitButton";


export default function UsernameForm({entered_username}) {
    const [taken, setTaken] = useState(false);

    async function handleSubmit(formData) {
        const res = await yoinkUsername(formData);

        setTaken(res === false);

        if (res) {
            redirect('/account?created='+formData.get('username'))
        }
    }

    return (
        <form action={handleSubmit}>
            <h1 className="text-4xl font-bold text-center mb-2">
                Yoink your username
            </h1>
            <p className="text-center mb-6 text-gray-500">
                Pick a unique username
            </p>
            <div className="max-w-xs mx-auto">
                <input 
                    name="username"
                    placeholder="Username" 
                    type="text" 
                    defaultValue={entered_username} 
                    className="block p-2 mx-auto border w-full mb-2 text-center"
                />
                {taken && 
                (<div className="bg-red-100 border border-red-500 p-2 mb-2 text-center">
                    Username already taken
                </div>)}
                <SubmitButton>
                    <span>Yoink username</span>
                    <Right />
                </SubmitButton>
            </div>
            
        </form>
    )
}