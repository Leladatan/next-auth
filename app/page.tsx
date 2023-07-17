import {NextPage} from "next";
import {getServerSession, Session} from "next-auth";
import {authConfig} from "@/configs/auth";

const HomePage: NextPage = async () => {
    const session: Session | null = await getServerSession(authConfig);
  return (
    <section>
        {session ? <h1>Hello, {session.user?.name}</h1> : <h1>Hello, unknown!</h1>}
    </section>
  )
}

export default HomePage;
