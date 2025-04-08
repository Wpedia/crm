import NextAuth from "next-auth";
import Github from "next-auth/providers/github";


const handler = NextAuth({
    providers: [
        Github({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),
    ]
,
callbacks: {
    async session({session, token}) {
        session.user.role = token.role ?? "viewer";
        return session;
    },
    async jwt({token}) {
        token.role = "admin";
        return token;
    },
}
})

export { handler as GET, handler as POST };