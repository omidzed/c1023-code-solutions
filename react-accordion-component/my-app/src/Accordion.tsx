import { useState } from 'react';
// import { TopicCard } from './TopicCard';

type AccordionProps = {
  topics: {
    id: number;
    title: string;
    content: string;
  }[];
};

export function Accordion({ topics }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  const accordionTopics = topics.map((t) => (
    <div className="topics-data">
      <li key={t.id} onClick={handleClick}>
        {t.title}
      </li>
      <p>{t.content}</p>
    </div>
  ));

  return (
    <>
      <ul className="topics-list">{accordionTopics}</ul>
      {/* <TopicCard topics={topics} /> */}
    </>
  );
}
