import React from 'react';
import { Users, Car, FileText } from 'lucide-react';

const StatCard = ({ title, value, icon: Icon }: { title: string; value: number; icon: React.ElementType }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <div className="flex items-center">
      <div className="p-2 bg-blue-50 rounded-lg">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
      <div className="ml-4">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
      </div>
    </div>
  </div>
);

const Dashboard = () => {
  // TODO: Replace with real data
  const stats = {
    activeDrivers: 12,
    totalVehicles: 25,
    expiringDocuments: 3,
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <StatCard
          title="Active Drivers"
          value={stats.activeDrivers}
          icon={Users}
        />
        <StatCard
          title="Total Vehicles"
          value={stats.totalVehicles}
          icon={Car}
        />
        <StatCard
          title="Expiring Documents"
          value={stats.expiringDocuments}
          icon={FileText}
        />
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-sm p-4 md:p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
        <p className="text-gray-500">No recent activity to display.</p>
      </div>
    </div>
  );
};

export default Dashboard;