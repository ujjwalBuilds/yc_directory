import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { client } from "./sanity/lib/client";
import { AUTHOR_BY_GITHUB_ID_QUERY } from "./sanity/lib/queries";
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  // callbacks: {
  //   async signIn({ user, account, profile}){
  //     const existingUser = await client.fetch(AUTHOR_BY_GITHUB_ID_QUERY, { id : profile?.id });
  //   }
  // }
});

