import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const { GITHUB_ID, GITHUB_SECRET } = process.env

const options = {
    providers: [
        Providers.GitHub({
            clientId: GITHUB_ID,
            clientSecret: GITHUB_SECRET
        }),
    ],
}

export default (req, res) => NextAuth(req, res, options)