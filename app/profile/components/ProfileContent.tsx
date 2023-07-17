"use client";
import {type FC, useEffect} from 'react';
import {Session} from "next-auth";
import Image from "next/image";
import {useRouter} from "next/navigation";

interface ProfileContentProps {
    session: Session | null;
}

export const ProfileContent: FC<ProfileContentProps> = ({session}) => {
    return (
        <section className="flex flex-col gap-y-2">
            <div className="flex items-center gap-x-4">
                {session?.user?.image && <Image className="rounded-full" width={40} height={40} src={session.user.image} alt="User image" />}
                <h1>Hello, {session?.user?.name}!</h1>
            </div>
            <h2>Your email address: {session?.user?.email}</h2>
        </section>
    );
};
