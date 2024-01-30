import CredentialsProvider from "next-auth/providers/credentials"
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'
import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcrypt"


export const authOptions = {
  providers:[
    GoogleProvider({
      clientId:process.env.GOOGLE_CLIENT_ID,
      clientSecret:process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "credentials", 
      credentials: {},
      async authorize(credentials){
        const { email, password } = credentials
        try {
          await connect()
          const user = await User.findOne({email})

          if(!user){
            return null
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);
          
          
          if (!passwordsMatch) {
            return null;
          }

          return user;

        } catch (error) {
          console.log(error)
        }
      }
    })
  ],
  callbacks: {
    async signIn({user, account}){
      if(account.provider === 'google'){
        const {name, email} = user
        console.log(name, email)
        try {
          await connect()
          const userExist = await User.findOne({email})
          // const password = 123456
          // console.log(userExist)
          if(!userExist){
            const res = await fetch('http://localhost:3000/api/register', {
              method:"POST",
              headers: {
                "Content-Type": 'application/json'
              },
              body: JSON.stringify({
                name, email
               
              })
            })
            console.log(res)
            if(res.ok){
              return user;
            }
          }

          return user
        
        } catch (error) {
        console.log(error)   
        }
       
      }
      if(account.provider === 'credentials'){
        return user
      }
    },
    async jwt({token, user}){
    
       return token
    }, 
    async session({session, token}){
      
          session.user.name = token.name
          session.user.email = token.email
      return session
    }
  },
  session: {
    strategy: "jwt"
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages:{
    signIn: "/login"
  }
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}