import { ShippingStatusEnum } from './types';

interface ShippingStatusProps {
  id: number;
  status: ShippingStatusEnum;
}

export const ShippingStatus: React.FC<ShippingStatusProps> = ({
  status,
  id,
}) => {
  const getColor = () => {
    switch (status) {
      case ShippingStatusEnum.Delivered:
        return 'green';
      case ShippingStatusEnum.Canceled:
        return 'red';
      case ShippingStatusEnum.Pending:
        return 'blue';
      case ShippingStatusEnum.Shipped:
        return 'orange';
    }
  };
  return (
    <div>
      <h3>Uzsakymo numeris #{id}</h3>
      <p>
        Uzsakymo statusas:{' '}
        <strong style={{ color: getColor() }}>{status}</strong>
      </p>
    </div>
  );
};
