import React from 'react'
import styles from './Tooltip.module.css'

const Tooltip = ({ title }) => {
  return (
    <div className={styles.container}>
      <span style={{ fontSize: 13 }}>
        {title}
      </span>
    </div>
  )
}

export default Tooltip