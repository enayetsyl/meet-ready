
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import connect from "@/utils/db";
import User from "@/models/User";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          await connect();
          const user = await User.findOne({ email });

          if (!user) {
            return null;
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            return null;
          }
          return user;

        } catch (error) {
          console.log("Error: ", error);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };



// import User from "@/models/User";
// import connect from "@/utils/db";
// import CredentialsProvider from "next-auth/providers/credentials";
// import bcrypt from "bcrypt";
// import NextAuth from "next-auth/next";

// export const authOptions = {
// providers: [
//   CredentialsProvider({
//     name: "credentials",
//     credentials: {
//       email: {label: "Email", type: "Text"},
//       password: {label: "Password", type: "password"}
//     },
//     async authorize(credentials){
//       const {email, password} = credentials
//       console.log('email', email)
//       await connect()
//       try {
//         const user = await User.findOne({
//           email
//         })
//         if(user){
//           const isPasswordCorrect = await bcrypt.compare(
//             password,
//             user.password
//           )
//           if(isPasswordCorrect){
//             return{
//               email: user.email,
//             }
//           }
//         }
//       } catch (error) {
//         throw new Error(error)
//       }
//     }
//   })
// ],
// session: {
//   strategy: "jwt"
// },
// secret: process.env.NEXTAUTH_SECRET,
// pages: {
//   signIn: "/login"
// }
// }

// export const handler = NextAuth(authOptions)
// export { handler as GET, handler as POST}