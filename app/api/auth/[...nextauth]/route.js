import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

console.log(process.env.GOOGLE_ID, process.env.GOOGLE_CLIENT_SECRET);

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  async session({ session }) {},
  async signIn({ profile }) {},
});

export const generateStaticParams = () => {
  return {
    // Your additional static parameters
  };
};

export { handler as GET, handler as POST };
