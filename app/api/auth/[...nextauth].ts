// // pages/api/auth/[...nextauth].ts
// import NextAuth from 'next-auth';
// import Providers from 'next-auth/providers';
// import { NextApiHandler } from 'next';

// const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, {
//   providers: [
//     Providers.Google({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//     // Add other providers as needed
//   ],
//   // Add custom configurations as needed
// });

// export default authHandler;
