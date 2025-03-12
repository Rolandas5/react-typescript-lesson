interface ButtonProps {
  size: '16px' | '24px' | '32px' | '52px';
  title: string;
  // void reiskia, kad funkcija nieko negrazina
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ size, title, onClick }) => {
  return (
    <button onClick={onClick} style={{ fontSize: size }}>
      {title}
    </button>
  );
};
