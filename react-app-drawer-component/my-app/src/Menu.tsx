type MenuProps = {
  menuItems: string[];
};

export function Menu({ menuItems }: MenuProps) {
  const menuItemsList = menuItems.map((item) => <li> {item}</li>);
  return (
    <>
      <ul>{menuItemsList}</ul>
    </>
  );
}
