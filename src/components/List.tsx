interface ListProps {
  // Kad tai gali buti misrus duomenu tipas
  items: (string | number)[];
}

export const List: React.FC<ListProps> = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};
