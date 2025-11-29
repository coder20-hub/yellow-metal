'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Plus, Edit, Trash2, Loader2, MapPin } from 'lucide-react';

interface Pincode {
  id: string;
  town: string;
  pincode: string;
  createdAt?: string;
  updatedAt?: string;
}

export default function PincodesPage() {
  const router = useRouter();
  const [pincodes, setPincodes] = useState<Pincode[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingPincode, setEditingPincode] = useState<Pincode | null>(null);
  const [formData, setFormData] = useState({
    town: '',
    pincode: '',
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

    if (userStr) {
      const user = JSON.parse(userStr);
      if (user.role !== 'superadmin') {
        router.push('/crm/dashboard');
        return;
      }
    }

    fetchPincodes(token);
  }, [router]);

  const fetchPincodes = async (token: string) => {
    try {
      setLoading(true);
      const response = await fetch('/api/crm/pincodes', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        cache: 'no-store', // Always fetch fresh data
      });

      const data = await response.json();
      if (data.success) {
        const sortedPincodes = (data.pincodes || []).sort((a: Pincode, b: Pincode) => 
          a.town.localeCompare(b.town)
        );
        setPincodes(sortedPincodes);
        console.log(`Loaded ${sortedPincodes.length} pincodes`);
      } else {
        console.error('Failed to fetch pincodes:', data.error);
      }
    } catch (error) {
      console.error('Error fetching pincodes:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenDialog = (pincode?: Pincode) => {
    if (pincode) {
      setEditingPincode(pincode);
      setFormData({
        town: pincode.town,
        pincode: pincode.pincode,
      });
    } else {
      setEditingPincode(null);
      setFormData({
        town: '',
        pincode: '',
      });
    }
    setError('');
    setSuccess('');
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setEditingPincode(null);
    setFormData({
      town: '',
      pincode: '',
    });
    setError('');
    setSuccess('');
  };

  const handleSubmit = async () => {
    setError('');
    setSuccess('');

    if (!formData.town || !formData.pincode) {
      setError('Town and pincode are required');
      return;
    }

    if (!/^\d{6}$/.test(formData.pincode)) {
      setError('Pincode must be exactly 6 digits');
      return;
    }

    const token = localStorage.getItem('crm_token');
    if (!token) return;

    try {
      const url = '/api/crm/pincodes';
      const method = editingPincode ? 'PUT' : 'POST';
      const body = editingPincode
        ? { id: editingPincode.id, ...formData }
        : formData;

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

      setSuccess(editingPincode ? 'Pincode updated successfully' : 'Pincode created successfully');
      setTimeout(() => {
        handleCloseDialog();
        fetchPincodes(token);
      }, 1000);
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this pincode?')) return;

    const token = localStorage.getItem('crm_token');
    if (!token) return;

    try {
      const response = await fetch(`/api/crm/pincodes?id=${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        alert(data.error || 'Failed to delete pincode');
        return;
      }

      fetchPincodes(token);
    } catch (err) {
      alert('An error occurred. Please try again.');
    }
  };

  if (loading) {
    return (
      <div className="p-6 lg:p-8">
        <div className="flex items-center justify-center h-96">
          <Loader2 className="h-8 w-8 animate-spin text-amber-600" />
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <MapPin className="w-8 h-8 mr-3 text-amber-600" />
            Pincode Management
          </h1>
          <p className="text-gray-600 mt-1">Manage towns and pincodes for loan applications</p>
        </div>
        <Button onClick={() => handleOpenDialog()} className="bg-amber-600 hover:bg-amber-700">
          <Plus className="h-4 w-4 mr-2" />
          Add Pincode
        </Button>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>All Pincodes ({pincodes.length})</CardTitle>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              const token = localStorage.getItem('crm_token');
              if (token) fetchPincodes(token);
            }}
            disabled={loading}
          >
            <Loader2 className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-8 w-8 animate-spin text-amber-600" />
            </div>
          ) : (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>SI No</TableHead>
                    <TableHead>Town</TableHead>
                    <TableHead>Pincode</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pincodes.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center py-8 text-gray-500">
                        No pincodes found. Add your first pincode to get started.
                      </TableCell>
                    </TableRow>
                  ) : (
                    pincodes.map((pincode, index) => (
                      <TableRow key={pincode.id} className="hover:bg-gray-50">
                        <TableCell className="font-medium">{index + 1}</TableCell>
                        <TableCell className="font-medium">{pincode.town}</TableCell>
                        <TableCell className="font-mono font-semibold">{pincode.pincode}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2 justify-end">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleOpenDialog(pincode)}
                              className="hover:bg-amber-50 hover:border-amber-300"
                            >
                              <Edit className="h-4 w-4 mr-1" />
                              Edit
                            </Button>
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={() => handleDelete(pincode.id)}
                              className="hover:bg-red-600"
                            >
                              <Trash2 className="h-4 w-4 mr-1" />
                              Delete
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Create/Edit Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {editingPincode ? 'Edit Pincode' : 'Add New Pincode'}
            </DialogTitle>
            <DialogDescription>
              {editingPincode
                ? 'Update town and pincode information'
                : 'Add a new town and pincode to the system'}
            </DialogDescription>
          </DialogHeader>

          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {success && (
            <Alert className="bg-green-50 border-green-200">
              <AlertDescription className="text-green-800">{success}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="town">Town Name *</Label>
              <Input
                id="town"
                value={formData.town}
                onChange={(e) => setFormData({ ...formData, town: e.target.value })}
                placeholder="e.g., Bangalore"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="pincode">Pincode *</Label>
              <Input
                id="pincode"
                type="text"
                maxLength={6}
                value={formData.pincode}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, ''); // Only numbers
                  if (value.length <= 6) {
                    setFormData({ ...formData, pincode: value });
                  }
                }}
                placeholder="e.g., 560001"
                required
              />
              <p className="text-xs text-gray-500">Must be exactly 6 digits</p>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={handleCloseDialog}>
              Cancel
            </Button>
            <Button onClick={handleSubmit} className="bg-amber-600 hover:bg-amber-700">
              {editingPincode ? 'Update' : 'Add'} Pincode
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

