import { signIn } from 'next-auth/client'
import Link from 'next/link'

import signedOutStyles from '../styles/SignedOut.module.css'





//body of home component to display when user isn't signed in.....
const SignedOutComponent = () => {


    //to sign a user in through their github account
    const handleUserSignIn = (e) => {
        e.preventDefault()
        signIn()
    }


    return (
        <div className={signedOutStyles.container}>
            <h1 className={signedOutStyles.welcomeHeader}>Welcome to - <span className={signedOutStyles.welcomeHeaderSpan}>Minority Programmers Association</span></h1>
            <div className={signedOutStyles.linkButtonContainer} >
               
                    <button
                        className={signedOutStyles.linkButton}
                        onClick={handleUserSignIn}
                    >
                        Start Your Journey
                </button>
               
            </div>
        </div>
    )
}




export default SignedOutComponent