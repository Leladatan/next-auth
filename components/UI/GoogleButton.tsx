"use client";
import {type FC} from 'react';
import {signIn} from "next-auth/react";
import {useSearchParams} from "next/navigation";

const GoogleButton: FC = () => {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/profile";

    return (
        <button className="rounded-xl bg-blue-500 p-2.5 text-white" onClick={() => signIn('google', {callbackUrl})}>
            Sign in with Google
        </button>
    );
};

export default GoogleButton;
