type MenuProps = {
  menuItems: string[];
};

export function Menu({ menuItems }: MenuProps) {
  const menuItemsList = menuItems.map((item) => <li> {item}</li>);
  return (
    <>
      <ul>
        <h1>Choose a Game</h1>
        {menuItemsList}
      </ul>
    </>
  );
}
