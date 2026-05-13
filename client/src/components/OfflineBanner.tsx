/**
 * Offline banner component
 */

import { useOffline } from '../hooks/useOffline';

export const OfflineBanner = () => {
  const { isOffline } = useOffline();

  if (!isOffline) return null;

  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 fixed top-16 right-4 z-50 rounded-r-lg shadow-lg">
      <div className="flex items-center gap-3">
        <span className="text-2xl">📡</span>
        <div>
          <p className="font-semibold text-yellow-800">You are offline</p>
          <p className="text-sm text-yellow-700">
            Your changes will be synced when you're back online
          </p>
        </div>
      </div>
    </div>
  );
};
