import { useState } from 'react';
//import { TopicCard } from './TopicCard';

type Topic = {
  id: number;
  title: string;
  content: string;
};

type AccordionProps = {
  topics: Topic[];
};

export function Accordion({ topics }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="topics-list">
      {topics.map((t) => (
        <div className="topics-data" key={t.id} onClick={handleClick}>
          {t.title}
          <p>{t.content}</p>
        </div>
      ))}
    </div>
  );
}
{
  /* <TopicCard topics={topics} /> */
}
