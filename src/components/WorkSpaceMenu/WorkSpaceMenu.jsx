import React, { useState } from 'react'
import styles from './WorkSpaceMenu.module.css'
import AddcircleIcon from '../../assets/addcircle.icon'
import RenameIcon from '../../assets/rename.icon'
import SaveIcon from '../../assets/save.icon'
import DeleteIcon from '../../assets/delete.icon'
import Tooltip from '../Tooltip/Tooltip'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import InputField from '../InputField/InputField'
import MaterialButton from '../MaterialButton/MaterialButton'
import { ClickAwayListener } from '@mui/material'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: 'none',
  outline: 'none',
  borderRadius: '3px 3px 3px 3px',
  boxShadow: 24,
  p: 4,
};

const WorkSpaceMenu = ({ workSpaces, setWorkSpaces }) => {
  const [inputVal, setInputVal] = useState('')
  const [showModal, setShowModal] = useState(false);
  const [addTooltip, setShowAddTooltip] = useState(false);

  function addWorkSpace() {
    setWorkSpaces([...workSpaces, inputVal])
    setShowModal(false)
  }


  return (
    <>
      <Modal open={showModal} onClose={() => setShowModal(true)} >
        <Box sx={style} onClick={(e) => e.stopPropagation()}>
          <div style={{ position: 'absolute', textAlign: 'center', paddingTop: 7, top: 0, left: 0, background: "#555", width: '100%', height: 35, borderRadius: '3px 3px 0 0' }}>
            <span style={{ color: '#ffffff' }}>Create New Tab/Workspace</span>
          </div>
          <div style={{ marginBlock: 40 }}>
            <InputField value={inputVal} setValue={setInputVal}
              placeholder="Write new tab name here..." color="#DDD" width={380} />
          </div>
          <div style={{ display: 'flex', gap: 5, justifyContent: 'center' }}>
            <MaterialButton onClick={addWorkSpace} width={195} isbordered={false} title='Done' color='#42ab50' hoverColor="#389544" />
            <MaterialButton onClick={() => setShowModal(false)} width={195} isbordered={false} title='Cancel' color='#D32F2F' hoverColor="#b92727" />
          </div>
        </Box>
      </Modal>

      {<div className={styles.container}>
        <div onClick={(e) => {
          e.stopPropagation()
          e.preventDefault()
          setShowModal(true)
        }}
          onMouseEnter={() => setShowAddTooltip(true)} onMouseLeave={() => setShowAddTooltip(false)}
        >
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
      }
    </>
  )
}

export default WorkSpaceMenu;
