import { useState } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import ConveyerCard from './components/ConveyerCard/ConveyerCard';
import MaterialCard from './components/MaterialCard/MaterialCard'
import SensorsComponent from './components/SensorsComponent/SensorsComponent';
import BabylonScene from './components/BabylonScene/BabylonScene';
import InputField from './components/InputField/InputField'
import Header from './components/Header/Header'
import MaterialButton from './components/MaterialButton/MaterialButton'
import colors from './colors';
import './App.css'

const ResponsiveGridLayout = WidthProvider(Responsive);

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
  const gridItems = [
    {
      id: 1, element: <div data-grid={{ autoSize: true }}>
        <ConveyerCard isHeaderUnderlined isConveyer title='Conveyor Id - 01' items={conveyerItems} />
      </div>
    },
    {
      id: 2, element: <MaterialCard width='800px' title="Panel 3D"><BabylonScene /></MaterialCard>
    },
    {
      id: 3, element: <MaterialCard isHeaderUnderlined title='P. Id: 11 Commands' width='307px'>
        <InputField />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8, padding: 8 }}>
          <MaterialButton isbordered={false} title='Bring Car' color='#125598' hoverColor="#0e4475" />
          <MaterialButton isbordered={false} title='Exit Car' color='#53575A' hoverColor="#393d49" />
          <MaterialButton isbordered={false} title='Delete Car' color='#D32F2F' hoverColor="#8a1c23" />
          <MaterialButton isbordered={false} title='Cancel Retrivial' color='#E24747' hoverColor="#b03737" />
        </div>
      </MaterialCard>
    },
  ];

  const layout = [
    { i: '1', x: 0, y: 0, w: 3, h: 5, minW: 2, minH: 6, autoSize: true },
    { i: '2', x: 3, y: 0, w: 5.5, h: 2.5, minW: 4, minH: 2 },
    { i: '3', x: 3, y: 0, w: 3, h: 2, minW: 2, minH: 1.5 },
  ];

  const [workSpaces, setWorkSpaces] = useState([1, 2, 3, 4, 5])

  return (
    <>
      <Header workSpaces={workSpaces} setWorkSpaces={setWorkSpaces} />
      <div style={{ marginInline: 5, marginBlock: 70 }}>
        <ResponsiveGridLayout
          layouts={{ lg: layout }}
          className='layout'
          autoSize={true}
          isDraggable={true}
          isResizable={true}
          margin={[30, 30]}
        >
          {gridItems.map((item, i) => (
            <div key={item.id} className='grid-item'>
              <div>{item.element}</div>
            </div>
          ))}
        </ResponsiveGridLayout>
      </div>
    </>
  );
}

export default App;
