import Head from 'next/head'
import { useSession } from 'next-auth/client'
import { connectToDatabase } from '../util/mongodb'

import homeStyles from '../styles/Home.module.css'


const loadingImg = "https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif"


import Header from '../components/Header';
import SignedOutComponent from '../components/SignedOut';
import SignedInComponent from '../components/SignedIn';


export default function Home({ isConnected }) {

  const [session, loading] = useSession();
  

  
  if(loading) return <div className={homeStyles.loadingDiv}><img src={loadingImg} alt="Loading...." /></div>
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


