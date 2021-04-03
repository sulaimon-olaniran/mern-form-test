import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/client'


import headerStyles from '../styles/Header.module.css'





const Header = () => {
    const [session] = useSession()

    const imgSrc = 'https://minorityprogrammers.com/assets/images/mp_gradient_rock.svg'

    //to sign a user in through their github account
    const handleUserSignIn = (e) => {
        e.preventDefault()
        signIn()
    }


    //to sign user out of their github account
    const handleUserSignOut = (e) => {
        e.preventDefault()
        signOut()
    }


    return (
        <>
           
            <nav className={headerStyles.navContainer}>
                <div className={headerStyles.linksContent}>
                    <Link href='/'>
                        <img src={imgSrc} className={headerStyles.logoImage} />
                    </Link>


                    <div className={headerStyles.linkDiv}>

                        {
                            session === null ?
                                <div className={headerStyles.authButtonContainer}>
                                    <a href="#" onClick={handleUserSignIn} className={headerStyles.authButton}>Join Minority-Programmers</a>
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