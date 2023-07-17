import {NextPage} from "next";
import {ProfileContent} from "@/app/profile/components/ProfileContent";
import {getServerSession, Session} from "next-auth";
import {authConfig} from "@/configs/auth";

const ProfilePage: NextPage = async () => {
    const session: Session | null = await getServerSession(authConfig);
    return (
        <ProfileContent session={session}/>
    );
};

export default ProfilePage;
