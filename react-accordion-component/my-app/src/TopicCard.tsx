type TopicCardProps = {
  topics: {
    id: number;
    title: string;
    content: string;
  }[];
};

export function TopicCard({ topics }: TopicCardProps) {
  const accordionTopicsContent = topics.map((t) => (
    <p key={t.id}>{t.content}</p>
  ));
  return { accordionTopicsContent };
}
