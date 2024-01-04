type AppDrawerProps = {
  menuItems: string[];
};

export function AppDrawer({ menuItems }: AppDrawerProps) {
  return (
    <>
      <div>{menuItems}</div>
    </>
  );
}
