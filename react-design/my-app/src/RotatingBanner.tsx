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
      <PrevButton
        onPrevClick={(index) =>
          index > 0 ? setIndex(index - 1) : setIndex(index)
        }
        index={index}
      />
      <Indicators
        onIndicatorsClick={(index) => setIndex(index)}
        index={index}
      />
      <NextButton
        onNextClick={(index) =>
          index < items.length - 1 ? setIndex(index + 1) : setIndex(index)
        }
        index={index}
      />
    </div>
  );
}
