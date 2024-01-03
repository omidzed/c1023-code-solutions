type AccordionProps = {
  topics: {
    id: number;
    title: string;
    content: string;
  }[];
};

export function Accordion({ topics }: AccordionProps) {
  const accordionTopics = topics.map((t) => <li key={t.id}>{t.title}</li>);

  return <ul className="topics-list">{accordionTopics}</ul>;
}
