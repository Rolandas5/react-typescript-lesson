import { ProductCategory } from './category';

// Apibrėžiame produkto tipą
interface Product {
  name: string;
  category: ProductCategory;
  price: number;
}

// ProductCard komponentas
export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  // Stilių priskyrimas pagal kategoriją naudojant switch
  let categoryStyle = {};

  switch (product.category) {
    case ProductCategory.Electronics:
      categoryStyle = { backgroundColor: 'blue', color: 'white' };
      break;
    case ProductCategory.Clothing:
      categoryStyle = { backgroundColor: 'green', color: 'white' };
      break;
    case ProductCategory.Books:
      categoryStyle = { backgroundColor: 'yellow', color: 'black' };
      break;
    default:
      categoryStyle = { backgroundColor: 'gray', color: 'white' };
  }

  return (
    <div
      style={{
        border: '1px solid #ddd',
        padding: '16px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        width: '256px',
      }}
    >
      <h2 style={{ fontSize: '18px', fontWeight: 'bold' }}>{product.name}</h2>
      <span
        style={{
          ...categoryStyle, // Priskiriame stilius pagal kategoriją
          padding: '4px 8px',
          borderRadius: '4px',
        }}
      >
        {product.category}
      </span>
      <p style={{ marginTop: '8px', color: '#555' }}>
        Kaina: {product.price.toFixed(2)} €
      </p>
    </div>
  );
};
