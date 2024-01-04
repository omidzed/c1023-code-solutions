import { useState } from 'react';
import { TopicCard } from './TopicCard';
import { Fragment } from 'react';

type Topic = {
  id: number;
  title: string;
  content: string;
};

type AccordionProps = {
  topics: Topic[];
};

export function Accordion({ topics }: AccordionProps) {
  const [topic, setTopic] = useState<Topic | null>();

  const topicCards = topics.map((clickedTopic) => (
    <Fragment key={clickedTopic.id}>
      <TopicCard
        topic={clickedTopic}
        onClick={() => handleClick(clickedTopic)}
        isOpen={clickedTopic.id === topic?.id}
      />
    </Fragment>
  ));

  function handleClick(clickedTopic: Topic) {
    setTopic(clickedTopic);
    if (clickedTopic.id === topic?.id) {
      setTopic(null);
    }
  }

  return <>{topicCards}</>;
}
