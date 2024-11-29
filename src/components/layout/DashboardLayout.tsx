import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Car, 
  FileText, 
  BarChart3, 
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

const DashboardLayout = () => {
  const location = useLocation();
  const { logout } = useAuthStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Drivers', href: '/drivers', icon: Users },
    { name: 'Vehicles', href: '/vehicles', icon: Car },
    { name: 'Documents', href: '/documents', icon: FileText },
    { name: 'Reports', href: '/reports', icon: BarChart3 },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-20 bg-white border-b border-gray-200">
        <div className="flex items-center justify-between px-4 py-3">
          <h1 className="text-xl font-bold text-gray-900">FleetSafe</h1>
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-10 bg-gray-600 bg-opacity-75" onClick={toggleMobileMenu}>
          <div className="fixed inset-y-0 left-0 w-64 bg-white" onClick={e => e.stopPropagation()}>
            <nav className="mt-16 px-3 space-y-1">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={toggleMobileMenu}
                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                      isActive
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="mr-3 h-5 w-5" />
                    {item.name}
                  </Link>
                );
              })}
              <button
                onClick={logout}
                className="w-full flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
              >
                <LogOut className="mr-3 h-5 w-5" />
                Logout
              </button>
            </nav>
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <div className="hidden lg:flex h-screen">
        <div className="w-64 bg-white shadow-lg">
          <div className="flex h-16 items-center px-6">
            <h1 className="text-xl font-bold text-gray-900">FleetSafe</h1>
          </div>
          <nav className="space-y-1 px-3">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                    isActive
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
          <div className="absolute bottom-0 w-64 p-4">
            <button
              onClick={logout}
              className="flex w-full items-center px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
            >
              <LogOut className="mr-3 h-5 w-5" />
              Logout
            </button>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-auto">
          <div className="py-6 px-8">
            <Outlet />
          </div>
        </div>
      </div>

      {/* Mobile main content */}
      <div className="lg:hidden pt-16">
        <div className="py-6 px-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;