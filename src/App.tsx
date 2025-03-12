import { ProductList } from './components/ProductList';
import { Button } from './components/Button';
import { List } from './components/List';
import { ObjectList } from './components/ObjectList';
import { UserProfile } from './components/UserProfile';

function App() {
  const items = [
    { name: 'Obuloys', price: 1.5, discount: true },
    { name: 'Bananai', price: 2.0, discount: false },
  ];

  return (
    <>
      <ProductList items={items} />
      <UserProfile name={'Rolandas'} age={27} isActive={true} />
      <UserProfile name={'Tomas'} isActive={false} />
      <List items={['obuolys', 'kriause', 'bananas', 1]} />
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
