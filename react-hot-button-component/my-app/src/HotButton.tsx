import { useState, useEffect } from 'react';
import './HotButton.css';

type Props = {
  label: string;
  style?: string;
};

export function HotButton({ label }: Props) {
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    console.log('Clicks:', clicks);
  }, [clicks]);

  function handleClick() {
    setClicks((clicks: number) => clicks + 1);
    label = `${clicks}`;
  }
  let className = 'hot-button';
  if (clicks > 14) {
    className = 'hot-button yellow';
  } else if (clicks > 11) {
    className = 'hot-button yellow';
  } else if (clicks > 8) {
    className = 'hot-button orange';
  } else if (clicks > 5) {
    className = 'hot-button pink';
  } else if (clicks > 2) {
    className = 'hot-button lavender';
  }

  return (
    <>
      <button className={className} onClick={handleClick}>
        <span>Hot Button</span>
      </button>
      <div className="click-count">
        <p>
          {label} {clicks}
        </p>
      </div>
    </>
  );
}
