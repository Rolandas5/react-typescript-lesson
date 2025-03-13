import { TaskStatusEnum } from './status';

// Sukuriame komponentą, kuris priima statusą ir atvaizduoja jį su skirtingomis spalvomis
interface StatusBadgeProps {
  status: TaskStatusEnum;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  let badgeColor = '';

  // Nustatome spalvą pagal statusą
  switch (status) {
    case TaskStatusEnum.Status:
      // Pavyzdžiui, "Status" yra pilka
      badgeColor = 'gray';
      break;
    case TaskStatusEnum.InProgress:
      // "In Progress" yra oranžinė
      badgeColor = 'orange';
      break;
    case TaskStatusEnum.Completed:
      // "Completed" yra žalia
      badgeColor = 'green';
      break;
    default:
      badgeColor = 'gray';
      break;
  }

  return (
    <span
      style={{
        backgroundColor: badgeColor,
        color: 'white',
        padding: '5px 10px',
        borderRadius: '12px',
      }}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
