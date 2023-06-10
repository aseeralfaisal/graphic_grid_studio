import React, { useState } from 'react'
import styles from './MaterialCard.module.css'
import InfoIcon from '../../assets/info.icon'
import PathIcon from '../../assets/path.icon'
import SettingsIcon from '../../assets/settings.icon'
import CloseIcon from '../../assets/close.icon'
import DownArrowIcon from '../../assets/downarrow.icon'

const MaterialCard = ({ title, children, width = "297.86px", isInnerCard = false, isHeaderUnderlined = false }) => {

    const [click, setClick] = useState(false)
    const [showItems, setShowItems] = useState(false)

    const handleClick = () => {
        setClick(!click)
        setShowItems(!showItems)
    }

    return (
        <div className={styles.materialCardContainer} style={{ width }} >
            <div className={styles.cardHeader}>
                <div className={styles.cardHeaderTitle}>
                    {title}
                </div>
                {isInnerCard ?
                    <div style={{
                        color: click ? '#FFBF3C' : '#FFFFFF',
                        transform: click ? 'rotate(0deg)' : 'rotate(180deg)'
                    }}>
                        <div onMouseUp={handleClick}>
                            <DownArrowIcon />
                        </div>
                    </div>
                    : <div style={{ display: 'flex', gap: 14 }}>
                        <InfoIcon />
                        <SettingsIcon />
                        <CloseIcon />
                    </div>}
            </div>
            {isHeaderUnderlined && <div style={{ background: "#FFBF3C", width: '50%', height: 4 }} />}
            {isInnerCard
                ?
                (showItems ? children : null)
                :
                children}
            {!isInnerCard && <div className={styles.pathIconContainer}>
                <PathIcon />
            </div>}
        </div>
    )
}

export default MaterialCard