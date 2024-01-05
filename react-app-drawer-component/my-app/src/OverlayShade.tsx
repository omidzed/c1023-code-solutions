type OverlayShadeProps = {
  isOpen: boolean;
  toggle: (event: React.MouseEvent<HTMLDivElement>) => void;
};

export function OverlayShade({ isOpen, toggle }: OverlayShadeProps) {
  return (
    <div
      className={isOpen ? 'overlay-shade' : 'overlay-shade hidden'}
      onClick={toggle}></div>
  );
}
