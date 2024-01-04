import { useState } from 'react';
import { TopicCard } from './TopicCard';

type Topic = {
  id: number;
  title: string;
  content: string;
};

type AccordionProps = {
  topics: Topic[];
};

export function Accordion({ topics }: AccordionProps) {
  const [topic, setTopic] = useState<Topic>();

  const topicCards = topics.map((t) => (
    <TopicCard key={t.id} topic={t} onClick={handleClick} isOpen={false} />
  ));

  function handleClick() {
    setTopic(topic);
    console.log(topic);
  }

  return <>{topicCards}</>;
}
