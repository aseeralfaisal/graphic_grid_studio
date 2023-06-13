import styles from './InputField.module.css'
import { useState } from 'react'

const InputField = ({ startIcon, placeholder, color, width, value, setValue }) => {
    return (
        <div className={styles.inputContainer} style={{ backgroundColor: color ? color : null, width: width && width }}>
            {startIcon ? startIcon : null}
            <input className={styles.input}
                value={value}
                onChange={(event) => {
                    event.preventDefault()
                    setValue(event.target.value)
                }}
                type="text" placeholder={placeholder}
            />
        </div>
    )
}

export default InputField