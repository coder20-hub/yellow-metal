'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import LoginPage from './components/LoginPage';

export default function CRMPage() {
  const router = useRouter();

  useEffect(() => {
    // Check if user is already logged in
    const token = localStorage.getItem('crm_token');
    if (token) {
      // Verify token is still valid
      fetch('/api/crm/auth/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            router.push('/crm/dashboard');
          } else {
            localStorage.removeItem('crm_token');
            localStorage.removeItem('crm_user');
          }
        })
        .catch(() => {
          localStorage.removeItem('crm_token');
          localStorage.removeItem('crm_user');
        });
    }
  }, [router]);

  return <LoginPage />;
}

