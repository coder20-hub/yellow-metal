'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ArrowLeft, Plus, Edit, Trash2, Loader2 } from 'lucide-react';
import Link from 'next/link';

interface Admin {
  id: string;
  username: string;
  name: string;
  role: string;
  createdAt: string;
  lastLogin?: string;
}

export default function AdminsPage() {
  const router = useRouter();
  const [admins, setAdmins] = useState<Admin[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingAdmin, setEditingAdmin] = useState<Admin | null>(null);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    name: '',
    role: 'admin',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('crm_token');
    const userStr = localStorage.getItem('crm_user');
    
    if (!token) {
      router.push('/crm');
      return;
    }

    // Check if user is superadmin
    if (userStr) {
      const user = JSON.parse(userStr);
      if (user.role !== 'superadmin') {
        router.push('/crm/dashboard');
        return;
      }
    }

    fetchAdmins(token);
  }, [router]);

  const fetchAdmins = async (token: string) => {
    try {
      const response = await fetch('/api/crm/admins', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (data.success) {
        setAdmins(data.admins || []);
      }
    } catch (error) {
      console.error('Error fetching admins:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenDialog = (admin?: Admin) => {
    if (admin) {
      setEditingAdmin(admin);
      setFormData({
        username: admin.username,
        password: '',
        name: admin.name,
        role: admin.role,
      });
    } else {
      setEditingAdmin(null);
      setFormData({
        username: '',
        password: '',
        name: '',
        role: 'admin',
      });
    }
    setError('');
    setSuccess('');
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setEditingAdmin(null);
    setFormData({
      username: '',
      password: '',
      name: '',
      role: 'admin',
    });
    setError('');
    setSuccess('');
  };

  const handleSubmit = async () => {
    setError('');
    setSuccess('');

    if (!formData.username) {
      setError('Username is required');
      return;
    }

    if (!editingAdmin && !formData.password) {
      setError('Password is required for new admin');
      return;
    }

    const token = localStorage.getItem('crm_token');
    if (!token) return;

    try {
      const url = editingAdmin ? '/api/crm/admins' : '/api/crm/admins';
      const method = editingAdmin ? 'PUT' : 'POST';
      const body = editingAdmin
        ? { id: editingAdmin.id, ...formData }
        : formData;

      // Remove password from update if empty
      if (editingAdmin && !formData.password) {
        delete body.password;
      }

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setError(data.error || 'Operation failed');
        return;
      }

      setSuccess(editingAdmin ? 'Admin updated successfully' : 'Admin created successfully');
      setTimeout(() => {
        handleCloseDialog();
        fetchAdmins(token);
      }, 1000);
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this admin?')) return;

    const token = localStorage.getItem('crm_token');
    if (!token) return;

    try {
      const response = await fetch(`/api/crm/admins?id=${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        alert(data.error || 'Failed to delete admin');
        return;
      }

      fetchAdmins(token);
    } catch (err) {
      alert('An error occurred. Please try again.');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/crm/dashboard">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            </Link>
            <h1 className="text-3xl font-bold">Manage Credentials</h1>
          </div>
          <Button onClick={() => handleOpenDialog()}>
            <Plus className="h-4 w-4 mr-2" />
            Add Admin
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Admin Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Username</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Created At</TableHead>
                    <TableHead>Last Login</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {admins.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-8 text-gray-500">
                        No admins found
                      </TableCell>
                    </TableRow>
                  ) : (
                    admins.map((admin) => (
                      <TableRow key={admin.id}>
                        <TableCell className="font-medium">{admin.username}</TableCell>
                        <TableCell>{admin.name}</TableCell>
                        <TableCell>
                          <span
                            className={`px-2 py-1 rounded text-xs font-medium ${
                              admin.role === 'superadmin'
                                ? 'bg-purple-100 text-purple-800'
                                : 'bg-blue-100 text-blue-800'
                            }`}
                          >
                            {admin.role}
                          </span>
                        </TableCell>
                        <TableCell>
                          {new Date(admin.createdAt).toLocaleDateString('en-IN')}
                        </TableCell>
                        <TableCell>
                          {admin.lastLogin
                            ? new Date(admin.lastLogin).toLocaleDateString('en-IN')
                            : 'Never'}
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleOpenDialog(admin)}
                              className="hover:bg-amber-50"
                            >
                              <Edit className="h-4 w-4 mr-1" />
                              Edit
                            </Button>
                            {admin.role !== 'superadmin' && (
                              <Button
                                variant="destructive"
                                size="sm"
                                onClick={() => handleDelete(admin.id)}
                              >
                                <Trash2 className="h-4 w-4 mr-1" />
                                Delete
                              </Button>
                            )}
                            {admin.role === 'superadmin' && (
                              <span className="text-xs text-gray-400 px-2 py-1">Protected</span>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Create/Edit Dialog */}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {editingAdmin ? 'Edit Admin' : 'Create New Admin'}
              </DialogTitle>
              <DialogDescription>
                {editingAdmin
                  ? 'Update admin user information'
                  : 'Create a new admin user account'}
              </DialogDescription>
            </DialogHeader>

            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {success && (
              <Alert>
                <AlertDescription>{success}</AlertDescription>
              </Alert>
            )}

            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username *</Label>
                <Input
                  id="username"
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                  disabled={!!editingAdmin && editingAdmin.role !== 'superadmin'}
                />
                {editingAdmin && editingAdmin.role === 'superadmin' && (
                  <p className="text-xs text-amber-600">Username can be changed for superadmin</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">
                  Password {editingAdmin ? '(leave empty to keep current)' : '*'}
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">Role *</Label>
                <Select
                  value={formData.role}
                  onValueChange={(value) =>
                    setFormData({ ...formData, role: value })
                  }
                  disabled={!!editingAdmin && editingAdmin.role === 'superadmin'}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="superadmin">Super Admin</SelectItem>
                  </SelectContent>
                </Select>
                {editingAdmin && editingAdmin.role === 'superadmin' && (
                  <p className="text-xs text-amber-600">Role cannot be changed for superadmin</p>
                )}
              </div>
            </div>

            <DialogFooter>
              <Button variant="outline" onClick={handleCloseDialog}>
                Cancel
              </Button>
              <Button onClick={handleSubmit}>
                {editingAdmin ? 'Update' : 'Create'}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

