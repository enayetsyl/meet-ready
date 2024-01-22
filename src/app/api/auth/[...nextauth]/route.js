import User from "@/models/User";
import connect from "@/utils/db";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypstjs"
import NextAuth from "next-auth/next";

export const authOptions = {
providers: [
  CredentialsProvider({
    id: 'credentials',
    name: "Credentials",
    credentials: {
      email: {label: "Email", type: "Text"},
      password: {label: "Password", type: "password"}
    },
    async authorize(credentials){
      await connect()
      try {
        const user = await User.findOne({
          email: credentials.email
        })
        if(user){
          const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password
          )
          if(isPasswordCorrect){
            return{
              email: user.email,
            }
          }
        }
      } catch (error) {
        throw new Error(error)
      }
    }
  })
]
}

export const handler = NextAuth(authOptions)
export { handler as GET, handler as POST}