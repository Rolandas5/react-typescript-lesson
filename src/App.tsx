import { ProductList } from './components/ProductList';
import { Button } from './components/Button';
import { List } from './components/List';
import { ObjectList } from './components/ObjectList';
import { UserProfile } from './components/UserProfile';
import UserForm from './components/UserForm';
import { Alert } from './components/Alert';
import { UserRoleBadge } from './components/UserRoleBadge';
import { ShippingStatus } from './components/ShippingStatus/ShippingStatus';
import { ShippingStatusEnum } from './components/ShippingStatus/types';
import { StatusBadge } from './components/StatusBadge/StatusBadge';
import { TaskStatusEnum } from './components/StatusBadge/status';
import { ProductCard } from './components/ProductCard/ProductCard';
import { ProductCategory } from './components/ProductCard/category';

// User interfeisas
interface User {
  name: string;
  age: number;
}

const sampleProduct = {
  name: 'Laptop',
  category: ProductCategory.Electronics,
  price: 999.99,
};

function App() {
  const items = [
    { name: 'Obuolys', price: 1.5, discount: true },
    { name: 'Bananai', price: 2.0, discount: false },
  ];

  const handleUserSubmit = (user: User) => {
    if (user.name && user.age > 0) {
      console.log('Vartotojo duomenys:', user);
      alert(`Vardas: ${user.name}, Amžius: ${user.age}`);
    } else {
      alert('Prašome įvesti teisingus duomenis');
    }
  };

  return (
    <>
      <ProductList items={items} />
      <UserForm onSubmit={handleUserSubmit} />
      <br />
      <UserRoleBadge role="admin" name="Rolandas" />
      <UserRoleBadge role="editor" name="Tomas" />
      <UserRoleBadge role="viewer" name="Gabija" />
      <br />
      <br />
      <Alert type="success" message="Sekmė!" />
      <Alert type="warning" message="Normalu" />
      <Alert type="error" message="Sugedo!" />
      <br />
      <ShippingStatus id={312} status={ShippingStatusEnum.Pending} />
      <ShippingStatus id={312} status={ShippingStatusEnum.Canceled} />
      <br />
      <StatusBadge status={TaskStatusEnum.Status} />
      <StatusBadge status={TaskStatusEnum.InProgress} />
      <StatusBadge status={TaskStatusEnum.Completed} />
      <br /><br />
      <ProductCard product={sampleProduct} />
      <br />
      <UserProfile name="Rolandas" age={27} isActive={true} />
      <UserProfile name="Tomas" isActive={false} />
      <List items={['obuolys', 'kriaušė', 'bananas', 1]} />
      <List items={[10, 12, 32]} />
      <ObjectList
        items={[
          { name: 'Rolandas', age: 27 },
          { name: 'Tomas', age: 50 },
        ]}
      />
      <Button
        size="32px"
        title="Paspausk mane"
        onClick={() => console.log('Mygtukas paspaustas')}
      />
      <Button
        size="24px"
        title="Paspausk mane"
        onClick={() => console.log('Mygtukas paspaustas')}
      />
      <Button
        size="16px"
        title="Paspausk mane"
        onClick={() => console.log('Mygtukas paspaustas')}
      />
    </>
  );
}

export default App;
