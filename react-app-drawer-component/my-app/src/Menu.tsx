type MenuProps = {
  menuItems: string[];
  onSelect: (item: string) => void;
};

export function Menu({ menuItems, onSelect }: MenuProps) {
  const menuItemsList = menuItems.map((menuItem, index) => (
    <li key={index} onClick={() => onSelect(menuItem)}>
      {menuItem}
    </li>
  ));

  return (
    <>
      <ul>
        <h1>Choose a Game</h1>
        {menuItemsList}
      </ul>
    </>
  );
}
