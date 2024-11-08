/* eslint-disable @typescript-eslint/no-unused-vars */
// next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    isNewUser?: boolean; // Add your custom property here
  }
}