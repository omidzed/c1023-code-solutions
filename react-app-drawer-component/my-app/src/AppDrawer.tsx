import { Menu } from './Menu';
import { useState } from 'react';
import { OverlayShade } from './OverlayShade';
import { GiHamburgerMenu } from 'react-icons/gi';

type AppDrawerProps = {
  menuItems: string[];
};

export function AppDrawer({ menuItems }: AppDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDrawer() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="wrapper">
      <div className={'drawer-container'}>
        <div className={isOpen ? 'hidden' : 'hamburger-container'}>
          <GiHamburgerMenu size={35} onClick={toggleDrawer} />
        </div>
        <div className={isOpen ? 'menu-drawer open' : 'menu-drawer closed'}>
          <Menu menuItems={menuItems} />
        </div>
        <OverlayShade toggle={toggleDrawer} isOpen={isOpen} />
      </div>
    </div>
  );
}
//  <h1 className="heading">heading</h1>
