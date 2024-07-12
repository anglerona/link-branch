"use client";
import { signIn, useSession } from "next-auth/react"

export default function LoginWithGoogle() {
    

    return (
        <button 
            className="bg-purple-600 text-white text-center w-full py-4 rounded shadow"
            onClick={() => {signIn('google')}}
        >
            Sign In with Google
        </button>
    )
}