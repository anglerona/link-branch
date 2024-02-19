import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-white border-b py-4">
            <div className="max-w-4xl mx-auto px-6 flex justify-between">
                <div className="flex gap-6">
                    <Link href={'/'}>LinkBranch</Link>
                    <nav className="flex items-center gap-4 text-sm text-gray-500">
                        <Link href={'/about'}>About</Link>
                    </nav>
                </div>
                
                <div className="flex gap-4 text-sm text-gray-500">
                    <Link href={'/signin'}>Sign In</Link>
                    <Link href={'/signup'}>Sign Up</Link>
                </div>
            </div>
            
        </header>
    );
}