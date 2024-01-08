import './App.css';
import { AppDrawer } from './AppDrawer';

const menuItems = [
  'The   Legend   of   Zelda',
  'A   Link   to   the   Past',
  'Ocarina   of   Time',
  'The   Wind   Waker',
  'Breath   of   the   Wild',
];

function App() {
  return (
    <div>
      <AppDrawer menuItems={menuItems} />
    </div>
  );
}

export default App;
