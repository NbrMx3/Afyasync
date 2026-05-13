/**
 * Dashboard page
 */

import { DashboardLayout } from '../layouts/DashboardLayout';
import { useAuth } from '../hooks/useAuth';

interface DashboardStats {
  totalPatients?: number;
  appointmentsToday?: number;
  pendingReports?: number;
  criticalCases?: number;
  totalAppointments?: number;
  completedAppointments?: number;
}

export const Dashboard = () => {
  const { user } = useAuth();
  const stats: DashboardStats = {
    totalPatients: 145,
    appointmentsToday: 12,
    pendingReports: 8,
    criticalCases: 3,
    totalAppointments: 892,
    completedAppointments: 756,
  };

  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome, {user?.name}! 👋</h1>
        <p className="text-gray-600 mb-8">Role: <span className="font-semibold capitalize">{user?.role}</span></p>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Patients</p>
                <p className="text-3xl font-bold text-gray-800">{stats.totalPatients}</p>
              </div>
              <span className="text-4xl">👥</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Appointments Today</p>
                <p className="text-3xl font-bold text-blue-600">{stats.appointmentsToday}</p>
              </div>
              <span className="text-4xl">📅</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Pending Reports</p>
                <p className="text-3xl font-bold text-yellow-600">{stats.pendingReports}</p>
              </div>
              <span className="text-4xl">📄</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Critical Cases</p>
                <p className="text-3xl font-bold text-red-600">{stats.criticalCases}</p>
              </div>
              <span className="text-4xl">🚨</span>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Appointments Chart */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Appointment Statistics</h3>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-600 mb-4">Completed: {stats.completedAppointments}%</p>
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-2xl">
                  {Math.round((stats.completedAppointments! / stats.totalAppointments!) * 100)}%
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-4 border-b">
                <span className="text-2xl">✅</span>
                <div>
                  <p className="font-semibold text-gray-800">Appointment Completed</p>
                  <p className="text-sm text-gray-600">Dr. Smith with Patient John</p>
                </div>
              </div>
              <div className="flex items-center gap-3 pb-4 border-b">
                <span className="text-2xl">📋</span>
                <div>
                  <p className="font-semibold text-gray-800">Report Generated</p>
                  <p className="text-sm text-gray-600">Monthly clinic report ready</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">👤</span>
                <div>
                  <p className="font-semibold text-gray-800">New Patient Registered</p>
                  <p className="text-sm text-gray-600">Patient Emma Johnson</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
