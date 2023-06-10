import React, { useState } from 'react'
import styles from './SensorsComponent.module.css'

const SensorsComponent = () => {
    const [sensors] = useState([
        { titile: 'LO', rounded: false },
        { titile: 'LI', rounded: false },
        { titile: 'LO', rounded: true },
        { titile: 'RO', rounded: true },
        { titile: 'RI', rounded: false },
        { titile: 'RO', rounded: false },
    ])

    return (
        <div className={styles.squareContainer}>
            {sensors.map((item, idx) => {
                return (
                    <div key={idx} className={styles.square} style={{ borderRadius: item.rounded ? 5 : 0 }}>
                        {item.titile}
                    </div>
                )
            })}
        </div>
    )
}

export default SensorsComponent