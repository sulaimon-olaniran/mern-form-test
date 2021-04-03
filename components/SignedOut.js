import { signIn } from 'next-auth/client'
import Link from 'next/link'

import Styles from '../styles/SignedOut.module.css'



const logoImgSrc = 'https://minorityprogrammers.com/assets/images/mp_gradient_rock.svg'
const welcImgSrc = "https://cdn.pixabay.com/photo/2018/04/28/19/53/cartoon-3358118_1280.png"



//body of home component to display when user isn't signed in.....
const SignedOutComponent = () => {


    //to sign a user in through their github account
    const handleUserSignIn = (e) => {
        e.preventDefault()
        signIn()
    }


    return (
        <div className={Styles.signinPageContainer}>

            <div className={Styles.signinFormContainer}>

                <div className={Styles.imageContainer}>
                    <img src={welcImgSrc} alt="Welcome" />
                </div>

                <form className={Styles.form}>

                    <div className={Styles.inputContainer}>
                        <img src="https://img.icons8.com/pastel-glyph/26/000000/person-male--v1.png" />
                        <input type="text" id="full_name" name="full_name" placeholder="Full Name" />
                    </div>

                    <div className={Styles.inputContainer}>
                        <img src="https://img.icons8.com/ios/26/000000/email.png" />
                        <input type="email" id="email" name="email" placeholder="Email" />
                    </div>

                    <div className={Styles.inputContainer}>
                        <img src="https://img.icons8.com/ios/26/000000/forgot-password.png" />
                        <input type='password' id="password" name="password" placeholder="Password" />
                    </div>

                    <div className={Styles.buttonsContainer}>
                        <button >Sign In</button>
                        <button>Sign Up</button>
                    </div>

                    <div className={Styles.githubButtonDiv}>
                        <button onClick={handleUserSignIn}>Sign In with Github</button>
                    </div>
                </form>

            </div>
        </div>
    )
}




export default SignedOutComponent