import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db_connect from "@/lib/db";
import { user } from "@/app/api/models/user";
import bcrypt from "bcryptjs";

export const auth_options = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        await db_connect();
        
        if (!credentials?.email || !credentials?.password) {
          throw new Error("all fields are required");
        }

        const found_user = await user.findOne({ email: credentials.email });

        if (!found_user) {
          throw new Error("user not found");
        }

        const is_password_correct = await bcrypt.compare(
          credentials.password,
          found_user.password_hash
        );

        if (!is_password_correct) {
          throw new Error("wrong password");
        }

        return { id: found_user._id, email: found_user.email, role: found_user.role };
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }: any) {
      if (session.user) session.user.role = token.role;
      return session;
    }
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt" as const,
  },
  secret: process.env.NEXTAUTH_SECRET,
};