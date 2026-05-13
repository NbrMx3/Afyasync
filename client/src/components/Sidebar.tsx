/**
 * Sidebar component
 */

import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const NAVIGATION_ITEMS = [
  { path: '/dashboard', label: 'Dashboard', icon: '📊', roles: ['admin', 'doctor', 'patient'] },
  { path: '/patients', label: 'Patients', icon: '👥', roles: ['admin', 'doctor'] },
  { path: '/appointments', label: 'Appointments', icon: '📅', roles: ['admin', 'doctor', 'patient'] },
  { path: '/reports', label: 'Reports', icon: '📄', roles: ['admin', 'doctor'] },
  { path: '/settings', label: 'Settings', icon: '⚙️', roles: ['admin', 'doctor', 'patient'] },
];

export const Sidebar = ({ isOpen }: { isOpen: boolean }) => {
  const { user } = useAuth();

  const visibleItems = NAVIGATION_ITEMS.filter(
    (item) => !user || item.roles.includes(user.role)
  );

  return (
    <aside
      className={`${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } fixed md:static md:translate-x-0 left-0 top-0 w-64 h-screen bg-gray-900 text-white transition-transform duration-300 z-40 mt-16 md:mt-0`}
    >
      <nav className="p-6 space-y-2">
        {visibleItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800'
              }`
            }
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};
