import Head from 'next/head'
import { useSession } from 'next-auth/client'
import { connectToDatabase } from '../util/mongodb'

import homeStyles from '../styles/Home.module.css'



import Header from '../components/Header';
import SignedOutComponent from '../components/SignedOut';
import SignedInComponent from '../components/SignedIn';


export default function Home({ isConnected }) {

  const [session, loading] = useSession();

  
  if(loading) return <h1>Loading.......</h1>
  return (
    <div className={homeStyles.container}>
      <Head>
            <meta
                name='viewport'
                content='width=device-width, initial-scale=1'
            />

            <meta charSet='utf-8' />
            <title>Mern Form Test</title>

        </Head>
      <Header />
      {session === null ? <SignedOutComponent /> : <SignedInComponent />}
    </div>
  )
}

export async function getServerSideProps(context) {
  const { client } = await connectToDatabase()

  const isConnected = await client.isConnected()

  return {
    props: { isConnected },
  }
}


