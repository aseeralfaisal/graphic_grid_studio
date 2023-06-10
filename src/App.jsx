import { useState } from 'react';
import Header from './components/Header/Header'
import SortableGrid from './components/Sortable/SortableGrid';
import ConveyerCard from './components/ConveyerCard/ConveyerCard';
import SensorsComponent from './components/SensorsComponent/SensorsComponent';
import BabylonScene from './components/BabylonScene/BabylonScene';
import MaterialCard from './components/MaterialCard/MaterialCard';
import colors from './colors'
import './App.css'
import InputField from './components/InputField/InputField';
import MaterialButton from './components/MaterialButton/MaterialButton';

const PLCComponent = () => (
  <div style={{ marginLeft: 5 }}>
    <div className="square" style={{ textAlign: 'center' }}>P</div>
  </div>
)
function App() {

  const [conveyerItems] = useState([
    { title: "Mode", status: 'Auto', color: colors.green },
    { title: "Status", status: 'Waiting', color: colors.orange },
    { title: "Task Type", status: 'Idle', color: colors.blue },
    { title: "Alarms", status: '109', color: colors.gray },
    { title: "Why Not Working" },
    { title: "Warning List" },
    { title: "Start Condition" },
    { title: "Pallet Sensors", status: <SensorsComponent /> },
    { title: "Car Weight" },
    { title: "Job Status", status: 'Unknown', color: colors.gray },
    { title: "Active Shelf", status: 0, color: colors.gray },
    { title: "PLC Pallet Exists", status: <PLCComponent /> },
    { title: "Front Lock Status" },
    { title: "Rear Lock Status" },
    { title: "Actual Velocity" },
  ])
  const [carrierItems] = useState([
    { title: "Mode", status: 'Auto', color: colors.gray },
    { title: "Status", status: 'Idle', color: colors.gray },
    { title: "Steps", status: 'Not Running', color: colors.gray },
    { title: "Job No.", status: '96', color: colors.gray },
    { title: "Position", status: 'Completed', color: colors.gray },
    { title: "Target", status: '0mm I 83230', color: colors.gray },
    { title: "Position ID", status: '01', color: colors.gray },
    { title: "Speed", status: '0 rpm I 0 m/s', color: colors.gray },
  ])


  const [cards, setCards] = useState([
    <ConveyerCard isHeaderUnderlined isConveyer title='Conveyor Id - 01' items={conveyerItems} />,
    <ConveyerCard title='Carrier Props' items={carrierItems} />,
    <MaterialCard width='800px' title="Panel 3D"><BabylonScene /></MaterialCard>,
    <MaterialCard isHeaderUnderlined title='P. Id: 11 Commands' width='307px'>
      <InputField />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8, padding: 8 }}>
        <MaterialButton isbordered={false} title='Bring Car' color='#125598' hoverColor="#0e4475" width="140px" />
        <MaterialButton isbordered={false} title='Exit Car' color='#53575A' hoverColor="#393d49" width="140px" />
        <MaterialButton isbordered={false} title='Delete Car' color='#D32F2F' hoverColor="#8a1c23" width="140px" />
        <MaterialButton isbordered={false} title='Cancel Retrivial' color='#E24747' hoverColor="#b03737" width="140px" />
      </div>
    </MaterialCard>,
  ])

  const [workSpaces, setWorkSpaces] = useState([1])
  return (
    <>
      <Header workSpaces={workSpaces} setWorkSpaces={setWorkSpaces} />
      <div style={{ margin: 10 }}>
        <SortableGrid items={cards} setItems={setCards} />
      </div>
    </>
  )
}

export default App
