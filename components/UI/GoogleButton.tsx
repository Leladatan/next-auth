"use client";
import {type FC} from 'react';
import {signIn} from "next-auth/react";
import {useSearchParams} from "next/navigation";

const GoogleButton: FC = () => {
    const callbackUrl: string = useSearchParams().get('callbackUrl') || '/profile';

    return (
        <button className="rounded-xl bg-blue-500 p-2.5 text-white" onClick={() => signIn('Google', {callbackUrl})}>
            Sign in with Google
        </button>
    );
};

export default GoogleButton;
