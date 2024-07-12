"use client"
import Link from "next/link";
import Page from "../icons/Page";
import Chart from "../icons/Chart";
import LogoutButton from "../buttons/LogoutButton";
import Left from "../icons/Left";
import { usePathname } from "next/navigation";

export default function Sidebar() {
    const path = usePathname();

    return (
        <nav className="inline-flex mx-auto flex-col text-center mt-8 gap-6">
            <Link href={'/account'} className={"flex gap-4 " + (path === '/account' ? 'text-purple-600' : '')}>
                <Page />
                <span>My Page</span>
            </Link>
            <Link href={'/analytics'} className={"flex gap-4 " + (path === '/analytics' ? 'text-purple-600' : '')}>
                <Chart />
                <span>Analytics</span>
            </Link>
            <LogoutButton className="flex gap-4 items-center " iconLeft="true" />
            <Link href={'/'} className="flex gap-2 items-center text-xs text-gray-600 border-t pt-4">
                <Left className="w-4 h-4" />
                <span>Back to site</span>
            </Link>
        </nav>
    )
}