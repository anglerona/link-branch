"use client"
import { signOut } from "next-auth/react";

export default function LogoutButton() {
    return (
        <button
            onClick={() => signOut()}
            className="flex items-center gap-2 p-2 px-4 shadow"
        >
            Logout
        </button>
    )
}