import type { NextAuthOptions } from "next-auth";
import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
     GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
CredentialsProvider({
  name: 'Credentials',
  credentials:{
   username:{
    label:'username',
    type:'text',
    placeholder:'Enter you username'
   },
   password:{
    label:'password',
    type:'password',
    placeholder:'Enter you username'
   },
  },
  async authorize(credentials) {
   const user = {id:'42', name:'Dave', password:'nextauth'}
   if(credentials?.username === user.name && credentials?.password === user.password){
    return user
   } else{
    return null
   }
  }
})
  ],
}