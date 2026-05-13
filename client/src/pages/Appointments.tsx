/**
 * Appointments page
 */

import { useState } from 'react';
import { DashboardLayout } from '../layouts/DashboardLayout';

interface Appointment {
  id: string;
  patientName: string;
  doctorName: string;
  date: string;
  time: string;
  status: 'scheduled' | 'completed' | 'cancelled';
}

export const Appointments = () => {
  const [appointments] = useState<Appointment[]>([
    {
      id: '1',
      patientName: 'John Doe',
      doctorName: 'Dr. Smith',
      date: '2024-01-15',
      time: '10:00 AM',
      status: 'scheduled',
    },
    {
      id: '2',
      patientName: 'Jane Smith',
      doctorName: 'Dr. Johnson',
      date: '2024-01-15',
      time: '11:30 AM',
      status: 'completed',
    },
    {
      id: '3',
      patientName: 'Robert Johnson',
      doctorName: 'Dr. Williams',
      date: '2024-01-16',
      time: '02:00 PM',
      status: 'scheduled',
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Appointments</h1>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            + Schedule Appointment
          </button>
        </div>

        {/* Appointments Grid */}
        <div className="grid gap-4">
          {appointments.map((appointment) => (
            <div key={appointment.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{appointment.patientName}</h3>
                  <p className="text-gray-600 text-sm">with {appointment.doctorName}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(appointment.status)}`}>
                  {appointment.status}
                </span>
              </div>
              <div className="flex items-center gap-8">
                <div>
                  <p className="text-gray-600 text-sm">Date</p>
                  <p className="font-semibold text-gray-800">{appointment.date}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Time</p>
                  <p className="font-semibold text-gray-800">{appointment.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};
