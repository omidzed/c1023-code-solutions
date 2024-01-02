import { useState, useEffect } from 'react';
import './HotButton.css';

export function HotButton() {
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    console.log('Clicks:', clicks);
  }, [clicks]);

  function handleClick() {
    setClicks((clicks: number) => clicks + 1);
  }

  let className = 'hot-button';

  if (clicks >= 18) {
    className = 'hot-button white';
  } else if (clicks >= 15) {
    className = 'hot-button yellow';
  } else if (clicks >= 12) {
    className = 'hot-button orange';
  } else if (clicks >= 9) {
    className = 'hot-button pink';
  } else if (clicks >= 6) {
    className = 'hot-button lavender';
  } else if (clicks >= 3) {
    className = 'hot-button purple';
  }

  return (
    <>
      <button className={className} onClick={handleClick}>
        <span>Hot Button</span>
      </button>
      <div className="click-count">
        <p> {clicks} Clicks</p>
      </div>
    </>
  );
}
