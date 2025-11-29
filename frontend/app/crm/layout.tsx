'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  Settings, 
  BarChart3, 
  LogOut,
  Coins,
  Menu,
  X,
  MapPin
} from 'lucide-react';

interface User {
  id: string;
  username: string;
  role: string;
  name: string;
}

export default function CRMLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('crm_token');
    if (!token) {
      router.push('/crm');
      return;
    }

    // Always fetch fresh user data from server
    fetch('/api/crm/auth/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: 'no-store', // Ensure we get fresh data
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.user) {
          // Ensure role is correctly set
          const userData = {
            ...data.user,
            role: data.user.role || 'admin', // Fallback to admin if role is missing
          };
          setUser(userData);
          localStorage.setItem('crm_user', JSON.stringify(userData));
          
          // Log for debugging
          console.log('User loaded:', {
            username: userData.username,
            role: userData.role,
            isSuperAdmin: userData.role === 'superadmin'
          });
        } else {
          localStorage.removeItem('crm_token');
          localStorage.removeItem('crm_user');
          router.push('/crm');
        }
      })
      .catch((error) => {
        console.error('Auth check error:', error);
        localStorage.removeItem('crm_token');
        localStorage.removeItem('crm_user');
        router.push('/crm');
      })
      .finally(() => setLoading(false));
  }, [router, pathname]); // Re-check when pathname changes

  const handleLogout = () => {
    localStorage.removeItem('crm_token');
    localStorage.removeItem('crm_user');
    router.push('/crm');
  };

  if (loading || pathname === '/crm') {
    return <>{children}</>;
  }

  if (!user) {
    return null;
  }

  const isSuperAdmin = user.role === 'superadmin';

  // Navigation items based on role
  const navItems = isSuperAdmin 
    ? [
        { href: '/crm/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
        { href: '/crm/applications', icon: FileText, label: 'Applications' },
        { href: '/crm/analytics', icon: BarChart3, label: 'Analytics' },
        { href: '/crm/pincodes', icon: MapPin, label: 'Pincodes' },
        { href: '/crm/settings', icon: Settings, label: 'Settings' },
        { href: '/crm/admins', icon: Users, label: 'Manage Admins' },
      ]
    : [
        { href: '/crm/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
        { href: '/crm/applications', icon: FileText, label: 'Applications' },
      ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-amber-900 to-yellow-900 text-white transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} transition-transform duration-300 ease-in-out`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between h-16 px-6 border-b border-amber-800">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Coins className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold">Gold Loan CRM</h2>
                <p className="text-xs text-amber-200">Admin Portal</p>
              </div>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-white/20 text-white shadow-lg'
                      : 'text-amber-100 hover:bg-white/10'
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* User Section */}
          <div className="px-4 py-4 border-t border-amber-800">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-sm font-semibold text-white">{user.name}</p>
                <p className="text-xs text-amber-200">{user.role}</p>
              </div>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              size="sm"
              className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-0">
        {/* Top Bar */}
        <header className="bg-white shadow-sm border-b sticky top-0 z-30">
          <div className="flex items-center justify-between h-16 px-4 lg:px-8">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-gray-600"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex-1" />
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600 hidden sm:block">
                Welcome, <span className="font-semibold text-gray-900">{user.name}</span>
              </span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

