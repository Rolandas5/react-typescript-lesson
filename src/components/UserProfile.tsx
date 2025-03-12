interface UserProfileProps {
  name: string;
  age?: number;
  isActive: boolean;
}

// React.FC - Nurodome typescriptui, kad tai yra React funkcinis komponentas

export const UserProfile: React.FC<UserProfileProps> = ({
  name,
  age,
  isActive,
}) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{age}</p>
      <p>{isActive ? 'Esate prisijunges' : 'Esate neprisijuinges'}</p>
    </div>
  );
};
