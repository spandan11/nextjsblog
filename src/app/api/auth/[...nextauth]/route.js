import { connectMongo } from "@/utils/dbconnect";
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from "@/models/User";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),

        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            async authorize(credentials) {
                await connectMongo()
                try {
                    const user = await User.findOne({ email: credentials.email })

                    if (user) {
                        const isPasswordCorrect = await bcrypt.compare(
                            credentials.password,
                            user.password
                        );

                        if (isPasswordCorrect) {
                            return user
                        } else {
                            throw new Error("Wrong credentials");
                        }

                    } else {
                        throw new Error("user not found!");
                    }

                } catch (error) {
                    throw new Error(error)
                }
            }
        }),
    ],
    pages: {
        error: "/dashboard/login"
    }
})

export { handler as GET, handler as POST };