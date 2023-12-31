type BannerProps = {
  items: string[];
  index: number;
};
export function Banner({ items, index }: BannerProps) {
  return <div className="border-black banner">{items[index]}</div>;
}
