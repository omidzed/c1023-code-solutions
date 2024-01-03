type TopicCardProps = {
  topics: {
    id: number;
    title: string;
    content: string;
  }[];
};

export function TopicCard({ topics }: TopicCardProps) {
  const accordionTopicsContent = topics.map((t) => (
    <div key={t.id}>
      <p>{t.content}</p>
    </div>
  ));
  return <div className="content">{accordionTopicsContent}</div>;
}
