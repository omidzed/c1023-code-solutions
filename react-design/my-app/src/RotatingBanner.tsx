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

  function handlePrevClick(index: number) {
    index > 0 ? setIndex(index - 1) : setIndex(index);
  }

  function handleNextClick(index: number) {
    index < items.length - 1 ? setIndex(index + 1) : setIndex(index);
  }

  function handleIndicatorsClick(index: number) {
    setIndex(index);
  }

  return (
    <div className="column-main">
      <Banner index={index} items={items} />
      <PrevButton onPrevClick={handlePrevClick} index={index} />
      <Indicators
        count={items.length}
        index={index}
        onIndicatorsClick={handleIndicatorsClick}
      />
      <NextButton onNextClick={handleNextClick} index={index} />
    </div>
  );
}
