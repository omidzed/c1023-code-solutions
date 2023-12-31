import './App.css';
import { RotatingBanner } from './RotatingBanner';

function App() {
  const items = [
    'Aardvark',
    'Bengal',
    'Caterpillar',
    'Dromedary',
    'Elephant',
    'Ferret',
  ];
  return (
    <div>
      <RotatingBanner items={items} />
    </div>
  );
}

export default App;
