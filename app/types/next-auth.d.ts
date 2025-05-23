import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: number | 0; 
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}
