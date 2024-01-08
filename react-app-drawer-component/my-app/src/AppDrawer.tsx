import { Menu } from './Menu';
import { useState } from 'react';
import { OverlayShade } from './OverlayShade';
import { GiHamburgerMenu } from 'react-icons/gi';

type AppDrawerProps = {
  menuItems: string[];
};

export function AppDrawer({ menuItems }: AppDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState('No Game Selected!');

  function toggleDrawer() {
    setIsOpen(!isOpen);
  }

  function onSelect(menuItem: string) {
    setItem(menuItem);
    toggleDrawer();
  }

  return (
    <div className={'drawer-container'}>
      <div className={isOpen ? 'hidden' : 'hamburger-container'}>
        <GiHamburgerMenu size={35} onClick={toggleDrawer} />
      </div>
      <div className={isOpen ? 'menu-drawer open' : 'menu-drawer closed'}>
        <Menu onSelect={onSelect} menuItems={menuItems} />
      </div>
      <OverlayShade toggle={toggleDrawer} isOpen={isOpen} />
      <div className={isOpen ? 'header-open' : 'header'}>
        <h1>{item}</h1>
      </div>
    </div>
  );
}
