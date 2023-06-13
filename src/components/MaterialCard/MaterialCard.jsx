import React, { useEffect, useState } from 'react'
import styles from './MaterialCard.module.css'
import InfoIcon from '../../assets/info.icon'
import SettingsIcon from '../../assets/settings.icon'
import CloseIcon from '../../assets/close.icon'
import DownArrowIcon from '../../assets/downarrow.icon'
import { useDispatch, useSelector } from 'react-redux'
import { setShowChildren } from '../../store/slice'

const MaterialCard = ({ title, children, width = "100%", height = "100%", isInnerCard = false, isHeaderUnderlined = false }) => {
    const dispatch = useDispatch()
    
    const showChildren = useSelector(state => state.slice.showChildren)
    const [click, setClick] = useState(false)
    
    const handleClick = () => {
        setClick(!click)
        dispatch(setShowChildren(!showChildren))
    }
    
    

    return (
        <div className={styles.materialCardContainer}>
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
                (showChildren ? children : <></>)
                :
                children}
        </div>
    )
}

export default MaterialCard