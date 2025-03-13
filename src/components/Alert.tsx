// type reiskia, kad galimybe pasirinkti tik viena is keliu variantu
type AlertTypes = 'success' | 'warning' | 'error';

interface AlertProps {
  type: AlertTypes;
  message: string;
}

export const Alert: React.FC<AlertProps> = ({ message, type }) => {
  const getColor = () => {
    switch (type) {
      case 'success':
        return 'green';
      case 'warning':
        return 'orange';
      case 'error':
        return 'red';
    }
  };
  return <div style={{ color: getColor() }}>{message}</div>;
};
