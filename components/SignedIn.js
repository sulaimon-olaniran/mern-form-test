import Styles from '../styles/SignedIn.module.css'
import { useSession } from 'next-auth/client'
import { useState } from 'react'
import axios from 'axios'


import InputComponent from './InputComponent'


const text = "The Minority Programmers are an international network of diverse students, educators, and professionals unifying together with a project-based approach to learning to develop coding solution for humanitarian problems in the world. Please complete the form below by adding your authentic details to each field"





//body of home component to display when user is signed in.....
const SignedInComponent = () => {
    const [session] = useSession();

    const [inputDatas, setInputDatas] = useState({})
    const [error, setError] = useState()

    const handleChange = e => {
        setInputDatas({
            ...inputDatas,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = e => {
        e.preventDefault()
        const { full_name, email, hobbies, age, hometown, ethnicity, linkedin, twitter} = inputDatas
        if(full_name && email && hobbies && age && hometown && ethnicity && linkedin && twitter){  
            return axios.post('/api/create_user', inputDatas)
              .then( res => {
                console.log(res);
              })
              .catch( error => {
                console.log(error);
              }); 
        }

        setError('You need to completely fill up all fields')
        
    }

    return (
        <div className={Styles.container}>

            <div className={Styles.headerContainer}>
                <div className={Styles.colorDiv} />

                <div className={Styles.headerContentContainer}>
                    <h1>Additional Profile Information Form</h1>

                    <p>{text}</p>
                </div>
            </div>




            <form className={Styles.form}>

                <InputComponent
                    label='Full name'
                    placeHolder='Your answer'
                    name='full_name'
                    id="full_name"
                    handleChange={handleChange}
                    //value={session && session.user.name}
                    value={"" || inputDatas.full_name}
                    type='text'
                />

                <InputComponent
                    label='Email address'
                    placeHolder="Your email"
                    name='email'
                    id='email'
                    handleChange={handleChange}
                    //value={session && session.user.email}
                    value={"" || inputDatas.email}
                    type='email'
                />

                <InputComponent
                    label='What is your favourite hobby'
                    placeHolder='Your answer'
                    name='hobbies'
                    id='hobbies'
                    handleChange={handleChange}
                    //value={"" || inputDatas.hobbies}
                    type='text'
                />

                <InputComponent
                    label='Age'
                    placeHolder='Your answer'
                    id='age'
                    name='age'
                    handleChange={handleChange}
                    //value={"" || inputDatas.age}
                    type='number'
                />

                <InputComponent
                    label="What is you race/ethnicity? (Put choose not to disclose if you do not want to disclose)"
                    placeHolder='Your answer'
                    id='ethnicity'
                    name='ethnicity'
                    handleChange={handleChange}
                    //value={"" || inputDatas.ethnicity}
                    type='text'
                />

                <InputComponent
                    label='Where is your hometown?'
                    placeHolder='Your answer'
                    id='hometown'
                    name='hometown'
                    handleChange={handleChange}
                    //value={inputDatas.hometown}
                    type='text'
                />

                <InputComponent
                    label="LinkedIn Profile Link"
                    placeHolder='Your answer'
                    name='linkedin'
                    id='linkedin'
                    handleChange={handleChange}
                    //value={"" || inputDatas.linkedin}
                    type='text'
                />

                <InputComponent
                    label="Twitter Profile Link"
                    placeHolder='Your answer'
                    name='twitter'
                    id='twitter'
                    handleChange={handleChange}
                    //value={"" || inputDatas.twitter}
                    type='text'
                />

                {error && <small style={{color:"red"}}>{error}</small>}



                <div
                    onClick={handleSubmit}
                    className={Styles.formSubmitButtonDiv}
                >
                    <button type='submit'>Submit</button>
                </div>

            </form>

        </div>
    )
}



export default SignedInComponent



