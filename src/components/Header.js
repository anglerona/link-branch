import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Link from "next/link";
import LogoutButton from "./buttons/LogoutButton";

export default async function Header() {
    const session = await getServerSession(authOptions);
    
    return (
        <header className="bg-white border-b py-4">
            <div className="max-w-4xl mx-auto px-6 flex justify-between">
                <div className="flex items-center gap-6">
                    <Link href={'/'} className="flex items-center gap-2">LinkBranch</Link>
                    <nav className="flex items-center gap-4 text-sm text-gray-500">
                        <Link href={'/about'}>About</Link>
                    </nav>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-gray-500">
                    {!session && (
                        <>
                            <Link href={'/signin'}>Sign In</Link>
                            <Link href={'/signin'}>Sign Up</Link>
                        </>
                    )}
                    {session && (
                        <>
                            <Link href={'/account'}>
                                Hello, {session?.user?.name}
                            </Link>
                            <LogoutButton />
                        </>
                    )}
                    
                </div>
            </div>
            
        </header>
    );
}