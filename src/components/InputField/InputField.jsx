import styles from './InputField.module.css'
import SearchIcon from '../../assets/search.icon'
import { useState } from 'react'

const InputField = () => {
    const [inputVal, setInputVal] = useState('')
    return (
        <div className={styles.inputContainer}>
            <SearchIcon />
            <input className={styles.input}
                value={inputVal}
                onChange={(event) => setInputVal(event.target.value)}
                type="text" placeholder='Any Room' />
        </div>
    )
}

export default InputField