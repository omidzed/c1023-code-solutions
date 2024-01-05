import { Menu } from './Menu';
import { useState } from 'react';
// import { OverlayShade } from './OverlayShade';
import { GiHamburgerMenu } from 'react-icons/gi';

type AppDrawerProps = {
  menuItems: string[];
};

export function AppDrawer({ menuItems }: AppDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  // function handleOverlayClick() {
  //   setIsOpen(!isOpen);
  // }

  return (
    <div className={'drawer-container'}>
      <div className={isOpen ? 'hidden' : 'hamburger-container'}>
        <GiHamburgerMenu size={35} onClick={handleClick} />
      </div>
      <div className={isOpen ? 'menu-drawer' : 'menu-drawer closed'}>
        <Menu menuItems={menuItems} />
        {/* <OverlayShade
          onOverlayClick={handleOverlayClick}
          isOpen={isOpen ? 'overlay-shade' : 'hidden'}
        /> */}
      </div>
    </div>
  );
}
