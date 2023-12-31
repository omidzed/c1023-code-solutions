type BannerProps = {
  items: string[];
  index: number;
};
export function Banner({ items, index }: BannerProps) {
  return <div className="banner">{items[index]}</div>;
}
