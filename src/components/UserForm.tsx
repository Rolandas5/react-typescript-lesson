import React, { useState } from 'react';

interface User {
  name: string;
  age: number;
}

interface UserFormProps {
  onSubmit: (user: User) => void;
}

const UserForm: React.FC<UserFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const userData: User = { name, age: Number(age) };
    onSubmit(userData);
    setName('');
    setAge('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Antra užduotis:</h2>
      <div>
        <label>Vardas:</label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>
      <div>
        <label>Amžius:</label>
        <input
          type="number"
          value={age}
          onChange={(event) => setAge(Number(event.target.value))}
          required
        />
      </div>
      <button type="submit">Pateikti</button>
    </form>
  );
};

export default UserForm;
