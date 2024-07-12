

import { getServerSession } from "next-auth"
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import UsernameForm from "@/components/forms/UsernameForm";
import { Page } from "@/models/Page";
import mongoose from "mongoose";
import PageSettings from "@/components/forms/PageSettings";
import PageButtons from "@/components/forms/PageButtons";
import PageLinks from "@/components/forms/PageLinks";


export default async function AccountPage({searchParams}) {
    const session = await getServerSession(authOptions);
    const entered_username = searchParams?.entered_username;
    
    if (!session) {
        return redirect('/');
    }
    mongoose.connect(process.env.MONGODB_URI)
    const page = await Page.findOne({ owner: session?.user?.email });

    if (page) {
        return (
            <>
                <PageSettings page={page} user={session?.user} />
                <PageButtons page={page} user={session?.user} />
                <PageLinks page={page} user={session?.user} />
            </>
            
        )
    }

    return (
        <div>
            <UsernameForm entered_username={entered_username} />
        </div>
    )
}