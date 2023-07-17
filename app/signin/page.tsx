import {NextPage} from "next";
import GoogleButton from "@/components/UI/GoogleButton";

const SignInPage: NextPage = async () => {
    return (
        <section className="flex flex-col items-center justify-center gap-y-2.5">
            <h1>Sign in</h1>
            <GoogleButton/>
        </section>
    );
};

export default SignInPage;
