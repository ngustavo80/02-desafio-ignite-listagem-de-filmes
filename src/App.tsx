import { BrowserRouter } from 'react-router-dom'

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

export function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar>
          <Content />
        </SideBar>
    </div>
    </BrowserRouter>
  )
}