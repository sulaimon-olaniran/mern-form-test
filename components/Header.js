import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/client'
import Meta from './Meta'


import headerStyles from '../styles/Header.module.css'





const Header = () => {
    const [session] = useSession()

    const imgSrc = 'https://minorityprogrammers.com/assets/images/mp_gradient_rock.svg'


    //to sign user out of their github account
    const handleUserSignOut = (e) => {
        e.preventDefault()
        signOut()
    }


    return (
        <>
            <Meta />
            <nav className={headerStyles.navContainer}>
                <div className={headerStyles.linksContent}>
                    <Link href='/'>
                        <img src={imgSrc} className={headerStyles.logoImage} />
                    </Link>


                    <div className={headerStyles.linkDiv}>

                        {
                            session === null ?
                                <div className={headerStyles.authButtonContainer}>
                                    <a href="#"  className={headerStyles.authButton}>
                                    <Link href="/signin" >
                                        Join Minority-Programmers
                                    </Link>
                                    </a>
                                </div>
                                :
                                <div className={headerStyles.headerProfile}>

                                    <div className={headerStyles.profileInformation}>
                                        <img src={session && session.user.image} className={headerStyles.avatarImage} />
                                        <p>{session && session.user.name}</p>
                                    </div>

                                    <div className={headerStyles.authButtonContainer}>
                                        <a href="#" onClick={handleUserSignOut} className={headerStyles.authButton}>Sign Out</a>

                                    </div>

                                </div>
                        }
                    </div>
                </div>

                <div className={headerStyles.colorsDiv}>
                    <div className={headerStyles.purpleDiv} />
                    <div className={headerStyles.pinkDiv} />
                    <div className={headerStyles.yellowDiv} />
                </div>
            </nav>
        </>
    )
}


export default Header