import HeroForm from "@/components/forms/HeroForm";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";


export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <section className="pt-24">
        <div className="max-w-md mb-8">
          <h1 className="text-6xl font-bold">
            Your single link <br/>to everything
          </h1>
          <h2 className="text-xl mt-6 text-gray-500">
            Share your socials, portfolios, contact info, and more
          </h2>
        </div>
        <HeroForm user={session?.user} />
      </section>
    </main>
  );
}
