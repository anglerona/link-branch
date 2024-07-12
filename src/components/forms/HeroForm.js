"use client"

import { signIn } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function HeroForm({user}) {
    const router = useRouter()

    useEffect(() => {
        if ('localStorage' in window && window.localStorage.getItem('entered_username')) {
            const username = window.localStorage.getItem('entered_username');
            window.localStorage.removeItem('entered_username');
            redirect('/account?entered_username='+username);
        }
    }, [])

    async function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const input = form.querySelector('input');
        const username = input.value;

        if (username.length > 0) {
            if (user) {
                router.push('/account?entered_username='+username);
            } else {
                window.localStorage.setItem('entered_username', username);
                await signIn('google');
            }
            
        }
        
    }

    return (
        <form onSubmit={handleSubmit} className="inline-flex items-center shadow-lg shadow-gray-700/2">
          <span className="bg-white pl-4 py-4 rounded-s">linkbranch.to/</span>

          <input type="text" placeholder="username" className="py-4 outline-none"/>

          <button type="submit" className="bg-purple-600 text-white px-6 py-4 rounded-e">
            Join Now
          </button>
        </form>
    )
}