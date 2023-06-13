import { useEffect, useState } from 'react';
import MaterialCard from '../MaterialCard/MaterialCard'
import { useDispatch, useSelector } from 'react-redux';
import styles from './ConveyerCard.module.css'
import { setLayout } from '../../store/slice';

const ConveyerCard = ({ items, isConveyer, title, isHeaderUnderlined }) => {
    const dispatch = useDispatch()
    const showChildren = useSelector(state => state.slice.showChildren)
    const layout = useSelector((state) => state.slice.layout)

    useEffect(() => {
        dispatch(() => {
          const updatedLayout = [...layout];
          updatedLayout[0] = { ...updatedLayout[0], h: showChildren ? 6.5 : 5 };
          return dispatch(setLayout(updatedLayout));
        });
      }, [showChildren, dispatch]);



    return (
        <MaterialCard title={title} isHeaderUnderlined={isHeaderUnderlined}>
            <div style={{ margin: 10 }}>
                {isConveyer && <span className={styles.title}>Lift Conveyor 1</span>}

                {items.map((item, idx) => {
                    return (
                        <div key={idx}>
                            <div className={styles.section}>
                                <div className={styles.converyerText}>{item.title}:</div>
                                <div className={styles.converyerText} style={{ width: 50, color: item.color }}>
                                    {item.status}
                                </div>
                            </div>
                            <div className={styles.devider}></div>
                        </div>
                    )
                })
                }
            </div>
            {isConveyer && <div style={{ margin: 5, display: 'grid', gap: 5 }}>
                <MaterialCard isInnerCard title="Conveyer Commands" width='286px' />
                <MaterialCard isInnerCard title="Conveyer Config" width='286px' />
                <MaterialCard isInnerCard title="Links" width='286px'>
                    <div className={styles.linksContainer}>
                        <div className={styles.link}>Room 01 : Oda 1</div>
                        <div className={styles.link}>Pallet [0] : 260 - No Car</div>
                        <div className={styles.link}>Carrier 2 (Turntable) : Turntable 1</div>
                        <div className={styles.link}>Carrier 1 (Lift) : Lift 1</div>
                        <div className={styles.link}>Facility</div>
                    </div>
                </MaterialCard>
            </div>}
        </MaterialCard>
    )
}

export default ConveyerCard