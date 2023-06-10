import React, { useState } from 'react'
import styles from './WorkSpaceMenu.module.css'
import AddcircleIcon from '../../assets/addcircle.icon'
import RenameIcon from '../../assets/rename.icon'
import SaveIcon from '../../assets/save.icon'
import DeleteIcon from '../../assets/delete.icon'
import Tooltip from '../Tooltip/Tooltip'

const WorkSpaceMenu = ({ workSpaces, setWorkSpaces }) => {

  const [addTooltip, setShowAddTooltip] = useState(false)
  console.log(workSpaces)

  function addWorkSpace() {
    setWorkSpaces([...workSpaces, workSpaces + 1])
  }

  return (
    <>
      <div className={styles.container}>
        <div onClick={addWorkSpace} onMouseEnter={() => setShowAddTooltip(true)} onMouseLeave={() => setShowAddTooltip(false)}>
          <AddcircleIcon />
        </div>
        {addTooltip && <Tooltip title="Add New Workspace" />}
        <div>
          <SaveIcon />
        </div>
        <div>
          <RenameIcon />
        </div>
        <div>
          <DeleteIcon />
        </div>
      </div>
    </>
  )
}

export default WorkSpaceMenu