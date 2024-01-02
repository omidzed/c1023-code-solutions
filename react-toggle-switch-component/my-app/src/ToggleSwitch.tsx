import { useState } from 'react';

export function ToggleSwitch() {
  const [isON, setIsON] = useState(false);

  function handleClick() {
    setIsON(!isON);
  }
  return (
    <div className="switch-container">
      <div
        className={isON ? 'toggle-switch is-on' : 'toggle-switch'}
        onClick={handleClick}>
        <div className="slider">
          <div className="switch"></div>
        </div>
        <span>{isON ? 'ON' : 'OFF'}</span>
      </div>
    </div>
  );
}
