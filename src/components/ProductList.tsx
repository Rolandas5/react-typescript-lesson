interface Item {
  name: string;
  price?: number;
  discount: boolean;
}

// React.FC - Nurodome TypeScript'ui, kad tai yra React funkcinis komponentas
interface ProductListProps {
  items: Item[];
}

export const ProductList: React.FC<ProductListProps> = ({ items }) => {
  return (
    <div>
      <h2>Pirma užduotis:</h2>
      {items.map((item, index) => (
        <div key={index}>
          <h2>{item.name}</h2>
          <p>{item.price}€</p>
          <p style={{ color: item.discount ? 'green' : 'black' }}>
            {item.discount ? 'Prekė yra su nuolaida' : 'Prekė be nuolaidos'}
          </p>
        </div>
      ))}
    </div>
  );
};
