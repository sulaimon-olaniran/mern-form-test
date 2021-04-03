import Styles from '../styles/SignedIn.module.css'





const InputComponent = (props) => {
    const { label, placeHolder, id, name, handleChange, value, type } = props
    return (
        <div className={Styles.inputSectionContainer}>
            <div className={Styles.topDivColor} />

            <div className={Styles.inputLabelContainer}>
                <p>{label}</p>
            </div>

            <div className={Styles.inputContainer}>
                <input 
                    className={Styles.input} 
                    placeholder={placeHolder} 
                    id={id}
                    name={name}
                    onChange={handleChange}
                    required
                    // value={value}
                    type={type}
                />
            </div>

            <div className={Styles.bottomDivColor} />
        </div>
    )
}




export default InputComponent