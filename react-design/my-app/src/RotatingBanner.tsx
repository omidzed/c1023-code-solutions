import { useState } from 'react';
import { Banner } from './Banner';
import { Indicators } from './Indicators';
import { PrevButton } from './Buttons/PrevButton';
import { NextButton } from './Buttons/NextButton';

type RotatingBannerProps = {
  items: string[];
};

export function RotatingBanner({ items }: RotatingBannerProps) {
  const [index, setIndex] = useState(0);
  return (
    <div className="column-main">
      <Banner index={index} items={items} />
      <PrevButton onPrevClick={(index) => setIndex(index - 1)} index={index} />
      <Indicators onIndicatorsClick={() => setIndex(index)} index={index} />
      <NextButton onNextClick={(index) => setIndex(index++)} index={index} />
    </div>
  );
}
