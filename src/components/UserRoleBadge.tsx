type UserRoles = 'admin' | 'editor' | 'viewer';

interface UserRoleBadgeProps {
  role: UserRoles;
  name: string;
}

export const UserRoleBadge: React.FC<UserRoleBadgeProps> = ({ role, name }) => {
    let color = '';
  
    if (role === 'admin') {
      color = 'red';
    } else if (role === 'editor') {
      color = 'blue';
    } else if (role === 'viewer') {
      color = 'green';
    }
  
    return (
      <span style={{ backgroundColor: color, color: 'white', padding: '5px', borderRadius: '4px' }}>
        {name}
      </span>
    );
  };
  