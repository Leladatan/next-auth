"use client";
import {type FC, useMemo} from 'react';
import {usePathname, useRouter} from "next/navigation";
import Link from "next/link";
import {useSession, signIn, signOut} from "next-auth/react";
import Image from "next/image";

type NavLink = {
    label: string;
    active: boolean;
    href: string;
}

const Header: FC = () => {
    const pathname: string = usePathname();
    const session = useSession();
    const router = useRouter();
    const routes: NavLink[] = useMemo(() => [
        {
            label: 'Home',
            active: pathname === '/',
            href: '/',
        },
    ], [pathname]);

    return (
        <header className="flex items-center justify-center gap-x-8 px-4 py-2 bg-gray-500">

            <nav>
                <ul className="flex items-center justify-center gap-x-6">
                    {routes.map(link => (
                        <li key={link.label}><Link className={link.active ? 'text-white' : 'text-neutral-400'} href={link.href}>{link.label}</Link></li>
                    ))}
                </ul>
            </nav>

            {session?.data ? <Link href="#" onClick={() => signOut({
                callbackUrl: '/'})}>Sing Out</Link> : <Link href="/signin">Sing In</Link>}

            {session?.data &&
                <Image priority src={session?.data?.user?.image!} onClick={() => router.push('/profile')}
                       className={`rounded-full cursor-pointer ${pathname === '/profile' && "border-2 border-b-amber-200"}`} width={25} height={25}
                       alt="Profile Image"/>}

        </header>
    );
};

export default Header;
