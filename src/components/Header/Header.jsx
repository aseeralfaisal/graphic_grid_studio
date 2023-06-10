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
import { useState } from 'react';
import WorkSpaceMenu from '../WorkSpaceMenu/WorkSpaceMenu';

const Header = ({ workSpaces, setWorkSpaces }) => {
    const [showWorkSpaceMenu, setShowWorkSpaceMenu] = useState(false)
    return (
        <>
            <div className={styles.headerContainer}>
                <MenuIcon />
                <div>
                    <DeviderIcon />
                </div>

                <LeftArrowIcon />
                <div className={styles.buttonContainer}>
                    {workSpaces.map((workspace, idx) => {
                        return (
                            <div key={idx}>
                                {workSpaces.length < 7 && <MaterialButton title={`Workspace-${idx + 1}`} />}
                            </div>
                        )
                    })}
                </div>
                <RightArrowIcon />

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
            </div>
        </>
    );
};

export default Header;
