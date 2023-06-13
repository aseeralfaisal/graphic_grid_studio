import MaterialButton from '../MaterialButton/MaterialButton';
import MenuIcon from '../../assets/menu.icon';
import DeviderIcon from '../../assets/devider.icon';
import EditIcon from '../../assets/edit.icon';
import WifiIcon from '../../assets/wifi.icon';
import ChatIcon from '../../assets/chat.icon';
import NotificationIcon from '../../assets/notification.icon';
import DownArrowIcon from '../../assets/downarrow.icon';
import UserIcon from '../../assets/user.icon';
import styles from './Header.module.css'
import LeftArrowIcon from '../../assets/leftarrow.icon';
import RightArrowIcon from '../../assets/rightarrow.icon'
import { useRef, useState } from 'react';
import WorkSpaceMenu from '../WorkSpaceMenu/WorkSpaceMenu';

const Header = ({ workSpaces, setWorkSpaces }) => {
    const [showWorkSpaceMenu, setShowWorkSpaceMenu] = useState(false)

    const elementRef = useRef(null)

    const handleScrollInline = (element, step) => {
        element.current.scrollLeft += step
    };

    return (
        <>
            <div className={styles.headerContainer}>
                <MenuIcon />
                <div>
                    <DeviderIcon />
                </div>

                <div className={styles.workspaceContainer}>
                    <div className={styles.arrowBtn} onClick={() => handleScrollInline(elementRef, -160)}>
                        <LeftArrowIcon />
                    </div>
                    <div className={styles.buttonContainer} id='buttonContainer' ref={elementRef}>
                        {workSpaces.map((workspace, idx) => {
                            return (
                                <div key={idx}>
                                    <MaterialButton width={150} title={`Workspace-${idx + 1}`} />
                                </div>
                            )
                        })}
                    </div>
                    <div className={styles.arrowBtn} onClick={() => handleScrollInline(elementRef, 160)}>
                        <RightArrowIcon />
                    </div>
                </div>

                <div className={styles.headerIconsContainer}>
                    <div onClick={() => setShowWorkSpaceMenu(!showWorkSpaceMenu)}>
                        <EditIcon />
                        {showWorkSpaceMenu && <WorkSpaceMenu workSpaces={workSpaces} setWorkSpaces={setWorkSpaces} />}
                    </div>
                    <div>
                        <WifiIcon />
                    </div>
                    <div>
                        <ChatIcon />
                    </div>
                    <div>
                        <NotificationIcon />
                    </div>
                </div>

                <div>
                    <DeviderIcon />
                </div>

                <div className={styles.userInfoContainer}>
                    <span style={{
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: 14.629,
                        lineHeight: '18px'
                    }}>
                        John Doe
                    </span>

                    <DownArrowIcon />
                    <UserIcon />
                </div>
            </div >
        </>
    );
};

export default Header;
