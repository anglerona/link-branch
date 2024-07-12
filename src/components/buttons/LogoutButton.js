"use client"
import { signOut } from "next-auth/react";
import Logout from "../icons/Logout";

export default function LogoutButton({
    className = "flex items-center gap-2 p-2 px-4 shadow",
    iconLeft = false,
}) {
    return (
        <button
            onClick={() => signOut()}
            className={className}
        >
            {iconLeft && <Logout />}
            Logout 
            {!iconLeft && <Logout />}
        </button>
    )
}