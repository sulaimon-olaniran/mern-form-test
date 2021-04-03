import Styles from '../styles/SigninPage.module.css'
import { signIn } from 'next-auth/client'




const logoImgSrc = 'https://minorityprogrammers.com/assets/images/mp_gradient_rock.svg'
const welcImgSrc = "https://cdn.pixabay.com/photo/2018/04/28/19/53/cartoon-3358118_1280.png"


export default function SignIn() {

     //to sign a user in through their github account
     const handleUserSignIn = (e) => {
        e.preventDefault()
        signIn()
    }


    return (
        <div className={Styles.signinPageContainer}>
            <img src={logoImgSrc} alt="Logo" />
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
                    <img src="https://img.icons8.com/ios/26/000000/forgot-password.png"/>
                        <input type='password' id="password" name="password" placeholder="Password" />
                    </div>

                    <div className={Styles.buttonsContainer}>
                        <button onClick={handleUserSignIn}>Sign In</button>
                        <button>Sign Up</button>
                    </div>


                </form>

            </div>
        </div>
    )
}