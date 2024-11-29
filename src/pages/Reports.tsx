import React from 'react';

const Reports = () => {
  const reports = [
    {
      id: 'expired-docs',
      name: 'Expired Documents',
      description: 'List of all expired documents and those expiring in the next 30 days',
    },
    {
      id: 'inactive-drivers',
      name: 'Inactive Drivers',
      description: 'List of all inactive drivers and their last active date',
    },
    {
      id: 'vehicle-status',
      name: 'Vehicle Status',
      description: 'Current status of all vehicles including maintenance records',
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Reports</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reports.map((report) => (
          <div
            key={report.id}
            className="bg-white overflow-hidden shadow-sm rounded-lg divide-y divide-gray-200"
          >
            <div className="px-6 py-5">
              <h3 className="text-lg font-medium text-gray-900">
                {report.name}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {report.description}
              </p>
              <div className="mt-4">
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Generate Report
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;