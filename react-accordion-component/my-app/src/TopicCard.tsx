type TopicCardProps = {
  topic: {
    id: number;
    title: string;
    content: string;
  };
  onClick: () => void;
  isOpen: boolean;
};

export function TopicCard({ topic, onClick }: TopicCardProps) {
  return (
    <div className="topic-card" onClick={onClick}>
      <span className="title">{topic.title}</span>
      {topic && <p>{topic.content}</p>}
    </div>
  );
}
